# frozen_string_literal: true

# Offline behavior checks using Mechanic's real Liquid runtime. No actions run.
# From a configured mechanic-api checkout:
# bundle exec ruby /path/to/mechanic-tasks/test/pos-form-email.rb /path/to/mechanic-api
require 'json'
require File.join(File.expand_path(ARGV.fetch(0)), 'config/environment')

task = JSON.parse(File.read(File.expand_path('../tasks/email-pos-form-answers-after-a-paid-sale.json', __dir__)))
form_id = '11111111-1111-4111-8111-111111111111'
base = {
  'options' => {'pos_form_id__required' => form_id, 'email_recipients__email_array_required' => ['workshop@example.com']},
  'event' => {'topic' => 'shopify/orders/paid'},
  'shop' => {'name' => 'Example', 'myshopify_domain' => 'example.myshopify.com', 'customer_email' => 'team@example.com'},
  'order' => {'id' => 42, 'name' => '#42', 'source_name' => 'pos', 'financial_status' => 'paid', 'cancelled_at' => nil,
              'note_attributes' => [{'name' => "_mechanic_pos_#{form_id}", 'value' => JSON.generate({'version' => 1, 'formRevision' => 1, 'savedWithCustomerId' => nil, 'answers' => {'item' => 'One bracelet', 'engraving_text' => 'Love, Alex'}})}]},
}
checks = 0
check = lambda do |name, mutate = nil, &assertion|
  values = Marshal.load(Marshal.dump(base))
  mutate&.call(values)
  rendered = Liquid::Template.parse(task.fetch('script'), error_mode: :strict).render!(Liquid::Context.new(values)).strip
  result = rendered.empty? ? {} : JSON.parse(rendered)
  raise "FAILED: #{name}: #{result.inspect}" unless assertion.call(result)

  checks += 1
  puts "PASS: #{name}"
end
set_saved = lambda do |values, saved|
  values['order']['note_attributes'][0]['value'] = JSON.generate(saved)
end
check.call('paid engraving sale queues email to configured team only') do |result|
  action = result.fetch('action')
  action['type'] == 'email' && action.dig('options', 'to') == ['workshop@example.com'] &&
    action.dig('options', 'body').include?('Love, Alex') && action.dig('options', 'subject') == 'POS instructions for #42'
end
check.call('custom fields and gift note are escaped; unchecked answers remain No', lambda { |v|
  set_saved.call(v, {'version' => 1, 'answers' => {'gift_message' => "<script>alert(1)</script>\nLove & hugs", 'wrap' => false, 'blank' => '', 'size' => 'small'}})
}) do |r|
  body = r.dig('action', 'options', 'body')
  body.include?('&lt;script&gt;') && !body.include?('<script>') && body.include?('<br />') &&
    body.include?('Love &amp; hugs') && body.include?('No') && body.include?('small') && !body.include?('<strong>Blank</strong>')
end
{
  'online sale' => ->(v) { v['order']['source_name'] = 'web' },
  'unpaid sale' => ->(v) { v['order']['financial_status'] = 'pending' },
  'partially paid sale' => ->(v) { v['order']['financial_status'] = 'partially_paid' },
  'cancelled sale' => ->(v) { v['order']['cancelled_at'] = '2026-11-18T00:00:00Z' },
  'wrong event' => ->(v) { v['event']['topic'] = 'shopify/orders/create' },
  'unrelated form' => ->(v) { v['order']['note_attributes'][0]['name'] = '_mechanic_pos_another-form' },
  'no attributes' => ->(v) { v['order']['note_attributes'] = [] },
  'blank answers' => ->(v) { set_saved.call(v, {'version' => 1, 'answers' => {'gift_message' => ''}}) },
}.each do |name, mutate|
  check.call("#{name} is skipped", mutate) { |r| !r.key?('action') && !r.key?('error') }
end
{
  'invalid form ID' => ->(v) { v['options']['pos_form_id__required'] = 'invalid' },
  'missing recipients' => ->(v) { v['options']['email_recipients__email_array_required'] = [] },
  'duplicate properties' => ->(v) { v['order']['note_attributes'] *= 2 },
  'malformed JSON' => ->(v) { v['order']['note_attributes'][0]['value'] = '{' },
  'nonstring property' => ->(v) { v['order']['note_attributes'][0]['value'] = {} },
  'oversized property' => ->(v) { v['order']['note_attributes'][0]['value'] = 'a' * 4097 },
  'nonobject data' => ->(v) { set_saved.call(v, []) },
  'null data' => ->(v) { set_saved.call(v, nil) },
  'unsupported version' => ->(v) { set_saved.call(v, {'version' => 2, 'answers' => {'message' => 'Hi'}}) },
  'nonobject answers' => ->(v) { set_saved.call(v, {'version' => 1, 'answers' => ['Hi']}) },
  'nested answer after valid answer' => ->(v) { set_saved.call(v, {'version' => 1, 'answers' => {'item' => 'bracelet', 'nested' => {'x' => 1}}}) },
  'numeric answer' => ->(v) { set_saved.call(v, {'version' => 1, 'answers' => {'number' => 42}}) },
  'invalid key' => ->(v) { set_saved.call(v, {'version' => 1, 'answers' => {'<html>' => 'Hi'}}) },
}.each do |name, mutate|
  check.call("#{name} errors without partial email", mutate) { |r| r.key?('error') && !r.key?('action') }
end
check.call('preview synthesizes realistic email without a webhook order', lambda { |v|
  v['event']['preview'] = true
  v.delete('order')
  v['options'] = {}
}) { |r| r.dig('action', 'type') == 'email' && r.dig('action', 'options', 'body').include?('Silver bracelet') }
check.call('preview shows the email even when the default sample order is online', ->(v) { v['event']['preview'] = true; v['order']['source_name'] = 'web' }) { |r| r.dig('action', 'type') == 'email' }
puts "#{checks} checks passed; no Shopify requests or emails sent."
