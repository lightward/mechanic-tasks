# frozen_string_literal: true

# Offline regression checks. Run from a mechanic-api checkout with its test gems:
# RAILS_ENV=test bundle exec ruby /path/to/mechanic-tasks/tests/gift-email.rb /path/to/mechanic-api
# Shopify reads use fixtures; actions are rendered but never performed.

ENV["RAILS_ENV"] = "test"
require 'json'
require File.join(ARGV.fetch(0), 'config/environment')
TASK = JSON.parse(File.read(File.expand_path('../tasks/email-gift-recipients-when-orders-are-fulfilled.json', __dir__)))
SCRIPT = TASK.fetch('script')
FORM_ID = '11111111-1111-4111-8111-111111111111'
PREFIX = "mechanic_form_#{FORM_ID}_"
OPTIONS = TASK.fetch('options').merge('form__storefrontform_required' => FORM_ID)
ORDER = {'id'=>'gid://shopify/Order/42', 'cancelledAt'=>nil, 'displayFulfillmentStatus'=>'FULFILLED', 'customAttributes'=>{'recipient_email'=>'gift@example.com', 'recipient_name'=>'Jordan', 'sender_name'=>'Alex', 'gift_message'=>'<script>alert(1)</script> Happy birthday!'}.map { |k,v| {'key'=>PREFIX+k, 'value'=>v} }}
module GiftOfflineShopify
  def shopify(query)
    @context.registers[:gift_state][:queries] << query
    {'data'=>{'order'=>@context.registers[:gift_state][:order]}}
  end
end
Liquid::Environment.default.register_filter(GiftOfflineShopify)
def run(order: ORDER, topic: 'shopify/orders/fulfilled', action: nil, preview: false, options: OPTIONS)
  state = {queries: [], order: order}
  values = {'event'=>{'id'=>'event-42', 'topic'=>topic, 'preview'=>preview}, 'options'=>options, 'order'=>{'admin_graphql_api_id'=>'gid://shopify/Order/42'}, 'shop'=>{'name'=>'Gift shop', 'customer_email'=>'team@example.com'}, 'action'=>action}
  context = Liquid::Context.new(values, {}, {gift_state: state})
  if topic == 'mechanic/actions/perform' && action
    values.merge!(Event.new(topic: topic, data: action).send(:build_mechanic_action_liquid_environment, context))
  end
  rendered = Liquid::Template.parse(SCRIPT, error_mode: :strict).render!(context).strip
  [rendered.empty? ? {} : JSON.parse(rendered), state]
end
def check(name)
  raise "FAIL: #{name}" unless yield
  puts "PASS: #{name}"
end
first,state = run
check('fulfillment only claims email, using an atomic absent-only metafield write') {first.dig('action','type') == 'shopify' && first.dig('action','options','query').include?('compareDigest: null')}
check('normal Mechanic action permission inference requests order write access') {Mechanic::Actions::ShopifyAction.new(first.fetch('action')).shopify_access_scopes_required.include?('write_orders')}
check('query fetches the current order and only selected form delivery marker') {state[:queries].length == 1 && state[:queries][0].include?('customAttributes') && state[:queries][0].include?('gift_11111111111141118111111111111111')}
meta = first.dig('action','meta')
claim = {'type'=>'shopify','meta'=>meta,'run'=>{'ok'=>true,'result'=>{'data'=>{'metafieldsSet'=>{'metafields'=>[{'id'=>'gid://shopify/Metafield/1','compareDigest'=>'claim-digest'}],'userErrors'=>[]}}}}}
email,_ = run(topic: 'mechanic/actions/perform', action: claim)
check('only successful claim queues email to the saved recipient') {email.dig('action','type') == 'email' && email.dig('action','options','to') == 'gift@example.com'}
check('buyer text is escaped and no order prices or status URL enter email') {email.dig('action','options','body').include?('&lt;script&gt;') && !email.dig('action','options','body').include?('<script>')}
check('email retains callback stage and claim digest') {email.dig('action','meta','stage') == 'send_gift_email' && email.dig('action','meta','digest') == 'claim-digest'}
callback = {'type'=>'email','meta'=>email.dig('action','meta'),'run'=>{'ok'=>true}}
record,_ = run(topic: 'mechanic/actions/perform', action: callback)
check('successful email marks sent using claim digest, with no further callback') {record.dig('action','type') == 'shopify' && record.dig('action','options','query').include?('claim-digest') && record.dig('action','options','__perform_event') == false && record.dig('action','options','query').include?('sent')}
%w[UNFULFILLED PARTIALLY_FULFILLED].each do |status|
  check("#{status} never claims or emails") { !run(order: ORDER.merge('displayFulfillmentStatus'=>status))[0].key?('action') }
end
check('cancelled orders skip') {!run(order: ORDER.merge('cancelledAt'=>'2026-09-22T00:00:00Z'))[0].key?('action')}
%w[pending sent].each do |status|
  check("existing #{status} marker skips repeated events") {!run(order: ORDER.merge('giftDelivery'=>{'value'=>JSON.generate(status: status)}))[0].key?('action')}
end
check('orders without selected form answers skip') {!run(order: ORDER.merge('customAttributes'=>[]))[0].key?('action')}
check('missing order fails without side effects') {run(order: nil)[0].key?('error')}
['one@example.com,two@example.com', "one@example.com\r\nBcc: other@example.com", 'not-email'].each do |address|
  modified = Marshal.load(Marshal.dump(ORDER)); modified['customAttributes'][0]['value']=address
  check("invalid recipient #{address.inspect} produces no email") {run(order: modified)[0].key?('error')}
end
failed = Marshal.load(Marshal.dump(claim)); failed['run']={'ok'=>false}
check('lost or failed claim response never emails') {!run(topic: 'mechanic/actions/perform', action: failed)[0].key?('action')}
failed = Marshal.load(Marshal.dump(callback)); failed['run']={'ok'=>false}
check('failed email keeps claim and reports an error') {run(topic: 'mechanic/actions/perform', action: failed)[0].key?('error')}
check('foreign callback stage does nothing') {run(topic: 'mechanic/actions/perform', action: claim.merge('meta'=>{'stage'=>'other'}))[0].empty?}
check('wrong callback type does nothing') {run(topic: 'mechanic/actions/perform', action: claim.merge('type'=>'email'))[0].empty?}
TASK.fetch('preview_event_definitions').each do |fixture|
  attrs=fixture['event_attributes']
  output,_ = run(topic: attrs['topic'], action: attrs['data'], preview: true, options: TASK['options'])
  check("preview: #{fixture['description']}") {output.key?('action')}
end
puts 'All checks use local Liquid rendering only: no Shopify actions and no email sent.'
