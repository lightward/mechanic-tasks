# Auto-tag orders by sales channel

Tags: Auto-Tag, Orders, Sales Channel

Use this task to tag orders as they come in, based on which sales channel created them. Run this task manually to backfill tags for all orders.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-by-sales-channel](https://tasks.mechanic.dev/auto-tag-orders-by-sales-channel)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-sales-channel.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names_and_tags__keyval_required": {
    "Online Store": "online-store",
    "Buy Button": "buy-button"
  }
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag orders as they come in, based on which sales channel created them. Run this task manually to backfill tags for all orders.

Please note: this task works by *sales channel*, and as such does not apply to orders that are created by an *app*. It's sometimes difficult to distinguish whether a third-party is using a sales channel or an app; if you're having trouble with this task, try its companion, [Auto-tag orders by app](https://usemechanic.com/task/auto-tag-orders-by-app).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-by-sales-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-sales-channel.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
