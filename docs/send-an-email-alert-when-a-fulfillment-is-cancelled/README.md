# Send an email alert when a fulfillment is cancelled

Tags: Alert, Email, Fulfillment

Useful for keeping an eye on unexpected cancellations by third party shipping services.

* View in the task library: [usemechanic.com/task/send-an-email-alert-when-a-fulfillment-is-cancelled](https://usemechanic.com/task/send-an-email-alert-when-a-fulfillment-is-cancelled)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-when-a-fulfillment-is-cancelled.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__email_required": "",
  "email_subject__required": "A fulfillment for order {{ fulfillment.order.name | default: \"an order\" }} was cancelled",
  "email_body__multiline_required": "Hello,\n\nA fulfillment with {{ fulfillment.line_items.size }} line item(s) was cancelled.\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ fulfillment.order.id }}\">Manage this order in Shopify</a>\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillments/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful for keeping an eye on unexpected cancellations by third party shipping services.

This task performs two actions: one to send an email, and one to "remember" that an email has been sent. (Without this second action, this task would send an email every time a cancelled fulfillment is updated.)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-email-alert-when-a-fulfillment-is-cancelled), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-when-a-fulfillment-is-cancelled.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
