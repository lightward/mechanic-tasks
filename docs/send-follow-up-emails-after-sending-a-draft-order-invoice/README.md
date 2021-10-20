# Send follow-up emails after sending a draft order invoice

Tags: Customers, Draft Orders, Email, Invoice

Use this task to send a follow-up email, 24 hours after you send out an email invoice for a draft order. Optionally, set this task to continue sending follow-up messages, every day after that.

* View in the task library: [usemechanic.com/task/send-follow-up-emails-after-sending-a-draft-order-invoice](https://usemechanic.com/task/send-follow-up-emails-after-sending-a-draft-order-invoice)
* Task JSON, for direct import: [task.json](../../tasks/send-follow-up-emails-after-sending-a-draft-order-invoice.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "send_daily_emails__boolean": true,
  "email_subject__required": "Invoice {{ shop.draft_orders[event.data.draft_order_id].name }}: Your order payment is due",
  "email_body__multiline_required": "Hello,\n\nPlease complete your order using this link:\n\n{{ shop.draft_orders[event.data.draft_order_id].invoice_url | default: \"(invoice url will be displayed here)\" }}\n\nThanks,\nThe team at {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
user/draft_orders/followup+24.hours
shopify/draft_orders/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to send a follow-up email, 24 hours after you send out an email invoice for a draft order. Optionally, set this task to continue sending follow-up messages, every day after that.

After you send an invoice for a draft order, this task will send a follow-up email 24 hours later, reminding the customer on file to complete the order.

Please note: Because Shopify does not share information about the invoice you send, this task uses the email address of the customer on file for the order, _even if_ this is different than the email you use to send the invoice. If the draft order does _not_ have a customer on file, the task will not be able to send a follow-up.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-follow-up-emails-after-sending-a-draft-order-invoice), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-follow-up-emails-after-sending-a-draft-order-invoice.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
