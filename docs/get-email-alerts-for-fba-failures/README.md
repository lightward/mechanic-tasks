# Get email alerts for FBA failures

Using Fulfillment By Amazon for your business? Stay on top of your customer experience by getting notified whenever FBA is unable to fulfill your order.

* View in the task library: [usemechanic.com/task/get-email-alerts-for-fba-failures](https://usemechanic.com/task/get-email-alerts-for-fba-failures)
* Task JSON, for direct import: [task.json](../../tasks/get-email-alerts-for-fba-failures.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "FBA failure for order {{ fulfillment.order.name | default: \"#12345\" }}",
  "email_body__multiline_required": "Hello,\n\nAmazon has reported a fulfillment failure for order {{ fulfillment.order.name | default: \"#12345\" }}. Here's the message they included:\n\n> {{ fulfillment.receipt.response_message | default: \"(no message given)\" }}\n\nView this order's details in Shopify:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ fulfillment.order.id | default: 12345 }}\n\nThanks,\n\n- Mechanic, for {{ shop.name }}",
  "email_recipient__email_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Using Fulfillment By Amazon for your business? Stay on top of your customer experience by getting notified whenever FBA is unable to fulfill your order.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/get-email-alerts-for-fba-failures), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/get-email-alerts-for-fba-failures.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
