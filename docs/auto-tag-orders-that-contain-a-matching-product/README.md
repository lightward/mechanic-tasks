# Auto-tag orders that contain a matching product

This task watches for incoming orders, and tags them if they contain a product that matches by title or by product tags. Run this task manually to scan your store's order history, tagging older orders that qualify.

* View in the task library: [usemechanic.com/task/auto-tag-orders-that-contain-a-matching-product](https://usemechanic.com/task/auto-tag-orders-that-contain-a-matching-product)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-contain-a-matching-product.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_product_title": null,
  "required_product_tags__array": null,
  "order_tags_to_apply__required_array": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for incoming orders, and tags them if they contain a product that matches by title or by product tags. Run this task manually to scan your store's order history, tagging older orders that qualify.

Note: If more than one required product tag is specified, this task will look for products that _individually_ contain _all_ of the tags provided.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-that-contain-a-matching-product), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-contain-a-matching-product.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
