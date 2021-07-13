# Email customers when their order is tagged

Tags: Customers, Email, Orders, Tag, Watch

Improve your customer relationships without complicated your workflow - use this task to send automatic emails whenever your staff adds a certain tag to an order. (Mechanic will add another tag to your order when the email is sent, for visibility.)

* View in the task library: [usemechanic.com/task/email-customer-when-order-tagged](https://usemechanic.com/task/email-customer-when-order-tagged)
* Task JSON, for direct import: [task.json](../../tasks/email-customer-when-order-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_watch_for__required": "in-production",
  "email_subject__required": "Order {{ order.name }} is in production",
  "email_body__required_multiline": "Hi {{ order.customer.first_name | default: \"there\" }},\n\nYour order is in the shop! We'll be in touch when it's been shipped.\n\nThanks,\nThe team at {{ shop.name }}",
  "ignore_orders_older_than_this_task__boolean": true,
  "ignore_orders_having_this_tag": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Improve your customer relationships without complicated your workflow - use this task to send automatic emails whenever your staff adds a certain tag to an order. (Mechanic will add another tag to your order when the email is sent, for visibility.)

This task monitors incoming orders, and updates to existing orders, looking for the tag of your choice. When the tag is detected, this task will send an email to the address on file for that order.

**Important notes**

* This task also adds a _second_ tag to the order when the email is sent, as a flag to mark the order as having had that email sent. This helps Mechanic remember what orders should _not_ have an email sent.
* This second tag defaults to a concatenation of the tag to watch for and "-email-sent"; however, because Shopify has a 40 character limit on order tags, the tag to watch for will be truncated to the first 29 characters if needed to form the concatenated tag. This truncation will only affect the email sent tag, not the original tag being watched for.
* Use the "Ignore orders older than this task" option to avoid a flood of unexpected email, instructing Mechanic to ignore any existing or new tags on older orders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-customer-when-order-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-customer-when-order-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
