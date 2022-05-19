# Auto-prefix tracking numbers for each new fulfillment

Tags: Fulfillment, Shipping, Tracking

This task runs immediately after each new fulfillment is created, and adds a prefix to its tracking number, if a tracking number is present.

* View in the task library: [tasks.mechanic.dev/auto-prefix-tracking-numbers-for-each-new-fulfillment](https://tasks.mechanic.dev/auto-prefix-tracking-numbers-for-each-new-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/auto-prefix-tracking-numbers-for-each-new-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tracking_number_prefix_to_add__required": null,
  "notify_customer__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/fulfillments/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs immediately after each new fulfillment is created, and adds a prefix to its tracking number, if a tracking number is present.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-prefix-tracking-numbers-for-each-new-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-prefix-tracking-numbers-for-each-new-fulfillment.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
