# Untag orders when closed/archived

Tags: Orders, Untag

This task automatically removes specific order tag(s) when orders are closed/archived.

* View in the task library: [tasks.mechanic.dev/untag-orders-when-closed-archived](https://tasks.mechanic.dev/untag-orders-when-closed-archived)
* Task JSON, for direct import: [task.json](../../tasks/untag-orders-when-closed-archived.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tags_to_remove__array": []
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task automatically removes specific order tag(s) when orders are closed/archived.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/untag-orders-when-closed-archived), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/untag-orders-when-closed-archived.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
