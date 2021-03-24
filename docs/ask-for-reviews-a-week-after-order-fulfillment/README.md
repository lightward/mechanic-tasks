# Ask for reviews a week after order fulfillment

Tags: Email, Fulfillment, Orders, Reviews

Follow up with your customers automatically, and establish the purchase -> earn-reviews -> attract-customers cycle. This task comes prefilled with a friendly, customizable email that gives the customer direct links to their purchases on your website, where they can leave a review using your existing review system.

* View in the task library: [usemechanic.com/task/ask-for-reviews-a-week-after-order-fulfillment](https://usemechanic.com/task/ask-for-reviews-a-week-after-order-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/ask-for-reviews-a-week-after-order-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_before_emailing__number_required": 7,
  "only_send_to_customers_who_have_accepted_marketing__boolean": true,
  "customer_tag_to_add_after_sending": null,
  "ignore_customers_having_this_tag": null,
  "ignore_orders_having_this_tag": null,
  "email_subject__required": "Will you review your order? :)",
  "email_body__multiline_required": "Hello,\n\nThanks for ordering from {{ shop.name }}!\n\nYour item{% if order.line_items.size > 1 %}s{% endif %} arrived a week ago, and we have a quick question: <b>will you review your purchase?</b>\n\nHere {% if order.line_items.size > 1 %}are direct links{% else %}is a direct link{% endif %}, to make this easy for you:\n<ul>{% for line_item in order.line_items %}{% if line_item.product_exists or event.preview %}<li><a href=\"https://{{ shop.domain }}/products/{{ line_item.product.handle }}\">{{ line_item.name }}</a></li>{% endif %}{% endfor %}</ul>\nThanks so much!\n\nSincerely,\nThe team at {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/fulfilled+{{ options.days_to_wait_before_emailing__number_required | default: 7 }}.days
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Follow up with your customers automatically, and establish the purchase -> earn-reviews -> attract-customers cycle. This task comes prefilled with a friendly, customizable email that gives the customer direct links to their purchases on your website, where they can leave a review using your existing review system.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/ask-for-reviews-a-week-after-order-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/ask-for-reviews-a-week-after-order-fulfillment.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
