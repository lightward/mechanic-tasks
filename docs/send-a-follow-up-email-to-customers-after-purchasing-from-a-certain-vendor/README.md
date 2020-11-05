# Send a follow-up email to customers after purchasing from a certain vendor

This task will send a follow-up email to your customer after their order is paid, waiting for a configurable number of days before doing so.

* View in the task library: [usemechanic.com/task/send-a-follow-up-email-to-customers-after-purchasing-from-a-certain-vendor](https://usemechanic.com/task/send-a-follow-up-email-to-customers-after-purchasing-from-a-certain-vendor)
* Task JSON, for direct import: [task.json](../../tasks/send-a-follow-up-email-to-customers-after-purchasing-from-a-certain-vendor.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_vendor__required": null,
  "email_subject__required": "Following up on your order ({{ order.name }})",
  "email_body__required_multiline": "Hello,\n\nThanks for ordering a (add your vendor!) product from {{ shop.name }}! Here's some important information you need to know...\n\nThanks,\n{{ shop.name }}",
  "number_of_days_to_wait_before_sending_email__number": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create{% if options.number_of_days_to_wait_before_sending_email__number != blank %}+{{ options.number_of_days_to_wait_before_sending_email__number }}.days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task will send a follow-up email to your customer after their order is paid, waiting for a configurable number of days before doing so.

This task will send a follow-up email to your customer after their order is paid. Configure it with the name of the vendor to watch for. The vendor name is case-sensitive!

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-a-follow-up-email-to-customers-after-purchasing-from-a-certain-vendor), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-follow-up-email-to-customers-after-purchasing-from-a-certain-vendor.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
