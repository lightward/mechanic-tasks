# Archive orders when fulfilled

Tags: Archive, Fulfillment, Orders

Super simple: this task monitors for order fulfillments, and automatically archives orders when they're fulfilled.

* View in the task library: [tasks.mechanic.dev/archive-orders-when-fulfilled](https://tasks.mechanic.dev/archive-orders-when-fulfilled)
* Task JSON, for direct import: [task.json](../../tasks/archive-orders-when-fulfilled.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/fulfilled
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Super simple: this task monitors for order fulfillments, and automatically archives orders when they're fulfilled.

This task runs automatically, when orders are fulfilled. To scan your store's order history and archive all _existing_ fulfilled orders, use the "Run task" button. [Enable "Read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders) to make sure Mechanic can scan your entire order history, and not just the last 60 days.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/archive-orders-when-fulfilled), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/archive-orders-when-fulfilled.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
