# Auto-complete new draft orders

Tags: Draft Orders, Payment

This task monitors for newly-created draft orders, and converts each one into a completed order. Nothing more, nothing less. :)

* View in the task library: [tasks.mechanic.dev/auto-complete-new-draft-orders](https://tasks.mechanic.dev/auto-complete-new-draft-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-complete-new-draft-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "mark_new_orders_as_fully_paid__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/draft_orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors for newly-created draft orders, and converts each one into a completed order. Nothing more, nothing less. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-complete-new-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-complete-new-draft-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
