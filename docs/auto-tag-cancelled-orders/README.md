# Auto-tag cancelled orders

Tags: Auto-Tag, Cancel, Orders

This task watches for order cancellations, and adds or removes tags according to your preference. Run this task manually to update tags for existing cancelled orders.

* View in the task library: [tasks.mechanic.dev/auto-tag-cancelled-orders](https://tasks.mechanic.dev/auto-tag-cancelled-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-cancelled-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_to_add__array": [
    "cancelled"
  ],
  "tags_to_remove__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for order cancellations, and adds or removes tags according to your preference. Run this task manually to update tags for existing cancelled orders.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-cancelled-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-cancelled-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
