# Auto-tag orders by discount code

Tags: Auto-Tag, Discounts, Orders

This task watches for newly-created orders, and copies any discount codes present to the order's tags.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-by-discount-code](https://tasks.mechanic.dev/auto-tag-orders-by-discount-code)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-discount-code.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for newly-created orders, and copies any discount codes present to the order's tags.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-by-discount-code), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-discount-code.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
