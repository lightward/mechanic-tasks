# Send a staff notification email for each delivery

Tags: Alert, Delivery, Email, Shipping

Use this task to send a staff email, the moment Shopify registers a successful delivery.

* View in the task library: [usemechanic.com/task/send-a-staff-notification-email-for-each-delivery](https://usemechanic.com/task/send-a-staff-notification-email-for-each-delivery)
* Task JSON, for direct import: [task.json](../../tasks/send-a-staff-notification-email-for-each-delivery.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__email_required": null,
  "email_subject__required": "Fulfillment {{ fulfillment_event.fulfillment.name | default: \"#1234.1\" }} has been delivered!",
  "email_body__multiline_required": "For more details, see order {{ fulfillment_event.order.name | default: \"#1234\" }} in Shopify:\n\nhttps://{{ shop.domain }}/admin/orders/{{ fulfillment_event.order_id }}\n\nThanks,\nMechanic"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to send a staff email, the moment Shopify registers a successful delivery.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-a-staff-notification-email-for-each-delivery), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-staff-notification-email-for-each-delivery.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
