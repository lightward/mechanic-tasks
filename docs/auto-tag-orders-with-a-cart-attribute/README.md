# Auto-tag orders with a cart attribute

Tags: Auto-Tag, Cart, Cart Attributes, Orders

This task checks for incoming orders, watching for orders that have a specific cart attribute filled in. When present, the task then copies that attribute over to the order's tags.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-with-a-cart-attribute](https://tasks.mechanic.dev/auto-tag-orders-with-a-cart-attribute)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-a-cart-attribute.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "cart_attribute_to_monitor__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task checks for incoming orders, watching for orders that have a specific cart attribute filled in. When present, the task then copies that attribute over to the order's tags.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-with-a-cart-attribute), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-a-cart-attribute.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
