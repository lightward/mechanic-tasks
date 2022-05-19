# Auto-tag new orders that have tips

Tags: (not tagged!)

This task watches for newly-paid orders, and tags any that include a customer tip, using the tag of your choice. :)

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-that-have-tips](https://tasks.mechanic.dev/auto-tag-orders-that-have-tips)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-have-tips.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_orders_that_have_a_tip__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for newly-paid orders, and tags any that include a customer tip, using the tag of your choice. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-that-have-tips), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-have-tips.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
