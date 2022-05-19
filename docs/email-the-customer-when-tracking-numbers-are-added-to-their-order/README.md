# Email the customer when tracking numbers are added to their order

Tags: Customers, Email, Orders, Shipping, Tracking

Use this task with services that add tracking numbers to fulfillments after fulfillments are created, to ensure that customers are notified when their tracking number is available.

* View in the task library: [tasks.mechanic.dev/email-the-customer-when-tracking-numbers-are-added-to-their-order](https://tasks.mechanic.dev/email-the-customer-when-tracking-numbers-are-added-to-their-order)
* Task JSON, for direct import: [task.json](../../tasks/email-the-customer-when-tracking-numbers-are-added-to-their-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Shipping update for order {{ fulfillment.order.name | default: \"(number)\" }}",
  "email_body__required_multiline": "Hello customer,\n\nTrack your package: TRACKING_NUMBERS\n\nThanks,\n{{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with services that add tracking numbers to fulfillments after fulfillments are created, to ensure that customers are notified when their tracking number is available.

This task works by monitoring created and updated fulfillments. It scans for and saves the tracking numbers currently available for an order, and whenever that set changes, it sends an email to the customer.

Use "TRACKING_NUMBERS" in your email body to insert a list of tracking numbers for the customer's order. Or, use "{{ fulfillment.tracking_number }}", to insert the single tracking number of the fulfillment that has just been created or updated.

[YouTube: Watch the development video!](https://youtu.be/W9VztafUY84)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-the-customer-when-tracking-numbers-are-added-to-their-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-the-customer-when-tracking-numbers-are-added-to-their-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
