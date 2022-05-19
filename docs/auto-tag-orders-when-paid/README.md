# Auto-tag orders when paid

Tags: Auto-Tag, Orders

This task watches for newly-paid orders, and adds a configurable tag to each one.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-when-paid](https://tasks.mechanic.dev/auto-tag-orders-when-paid)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-when-paid.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_apply__required": "paid"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for newly-paid orders, and adds a configurable tag to each one.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-when-paid), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-when-paid.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
