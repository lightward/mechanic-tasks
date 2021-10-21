# Auto-prefix tracking numbers for each new fulfillment

Tags: Fulfillment, Shipping, Tracking

This task runs immediately after each new fulfillment is created, and adds a prefix to its tracking number, if a tracking number is present.

* View in the task library: [usemechanic.com/task/auto-prefix-tracking-numbers-for-each-new-fulfillment](https://usemechanic.com/task/auto-prefix-tracking-numbers-for-each-new-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/auto-prefix-tracking-numbers-for-each-new-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tracking_number_prefix_to_add__required": null,
  "notify_customer__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillments/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task runs immediately after each new fulfillment is created, and adds a prefix to its tracking number, if a tracking number is present.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-prefix-tracking-numbers-for-each-new-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-prefix-tracking-numbers-for-each-new-fulfillment.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
