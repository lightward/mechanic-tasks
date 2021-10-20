# Auto-tag orders with product tags

Tags: Auto-Tag, Orders, Products

This task watches for new orders, and copies tags from each ordered product to the order itself.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-product-tags](https://usemechanic.com/task/auto-tag-orders-with-product-tags)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-product-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_copy_these_product_tags__array": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for new orders, and copies tags from each ordered product to the order itself.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-product-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-product-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
