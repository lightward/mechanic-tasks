# Auto-tag orders with a cart attribute

This task checks for incoming orders, watching for orders that have a specific cart attribute filled in. When present, the task then copies that attribute over to the order's tags.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-a-cart-attribute](https://usemechanic.com/task/auto-tag-orders-with-a-cart-attribute)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-a-cart-attribute.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "cart_attribute_to_monitor__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task checks for incoming orders, watching for orders that have a specific cart attribute filled in. When present, the task then copies that attribute over to the order's tags.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-a-cart-attribute), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-a-cart-attribute.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
