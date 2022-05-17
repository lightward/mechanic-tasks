# Send an email alert when a customer places more than 2 orders in 24 hours

Tags: Alert, Email, Risk

Use this task to receive an email alert whenever a single customer exceeds a configurable order count, over the last configurable number of hours.

* View in the task library: [tasks.mechanic.dev/send-an-email-alert-when-a-customer-places-more-than-2-orders-in-24-hours](https://tasks.mechanic.dev/send-an-email-alert-when-a-customer-places-more-than-2-orders-in-24-hours)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-when-a-customer-places-more-than-2-orders-in-24-hours.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_count_threshold__number_required": "2",
  "number_of_hours_to_look_back__number_required": "24",
  "email_recipient__email_required": "",
  "email_subject__required": "{{ order.customer.email }} has placed >= 2 orders in the last 24 hours",
  "email_body__required_multiline": "Hello,\n\nThe customer {{ order.customer.email }} has exceeded the configured order threshold.\n\n<a href=\"https://{{ shop.domain }}/admin/customers/{{ order.customer.id }}\">Manage this customer in Shopify</a>\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to receive an email alert whenever a single customer exceeds a configurable order count, over the last configurable number of hours.

Note: This task does not distinguish by order source. When counting orders, all order sources are considered (e.g. the online storefront, the Shopify admin, other apps, etc).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-an-email-alert-when-a-customer-places-more-than-2-orders-in-24-hours), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-when-a-customer-places-more-than-2-orders-in-24-hours.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
