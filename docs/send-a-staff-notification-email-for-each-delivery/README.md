# Send a staff notification email for each delivery

Tags: Alert, Delivery, Email, Shipping

Use this task to send a staff email, the moment Shopify registers a successful delivery.

* View in the task library: [tasks.mechanic.dev/send-a-staff-notification-email-for-each-delivery](https://tasks.mechanic.dev/send-a-staff-notification-email-for-each-delivery)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to send a staff email, the moment Shopify registers a successful delivery.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-a-staff-notification-email-for-each-delivery), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-staff-notification-email-for-each-delivery.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
