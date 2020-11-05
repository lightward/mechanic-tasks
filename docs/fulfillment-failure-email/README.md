# Send an email alert on fulfillment failure

Get an alert email sent to you when your tracking service reports a fulfillment failure. This email contains a link to the order details, so you can jump in and resolve the issue for the customer without losing any time.

* View in the task library: [usemechanic.com/task/fulfillment-failure-email](https://usemechanic.com/task/fulfillment-failure-email)
* Task JSON, for direct import: [task.json](../../tasks/fulfillment-failure-email.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Get an alert email sent to you when your tracking service reports a fulfillment failure. This email contains a link to the order details, so you can jump in and resolve the issue for the customer without losing any time.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/fulfillment-failure-email), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/fulfillment-failure-email.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
