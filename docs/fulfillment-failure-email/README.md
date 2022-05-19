# Send an email alert on fulfillment failure

Tags: Alert, Email, Fulfillment

Get an alert email sent to you when your tracking service reports a fulfillment failure. This email contains a link to the order details, so you can jump in and resolve the issue for the customer without losing any time.

* View in the task library: [tasks.mechanic.dev/fulfillment-failure-email](https://tasks.mechanic.dev/fulfillment-failure-email)
* Task JSON, for direct import: [task.json](../../tasks/fulfillment-failure-email.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Get an alert email sent to you when your tracking service reports a fulfillment failure. This email contains a link to the order details, so you can jump in and resolve the issue for the customer without losing any time.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/fulfillment-failure-email), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/fulfillment-failure-email.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
