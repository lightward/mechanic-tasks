# Auto-tag orders that contain a matching product

Tags: Auto-Tag, Orders, Products

This task watches for incoming orders, and tags them if they contain a product that matches by title or by product tags. Additionally, edited orders will have tags added or removed in line with product additions or removals. Run this task manually to scan your store's order history, tagging older orders that qualify, and untagging those that have been edited and no longer do.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-that-contain-a-matching-product](https://tasks.mechanic.dev/auto-tag-orders-that-contain-a-matching-product)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/edited
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for incoming orders, and tags them if they contain a product that matches by title or by product tags. Additionally, edited orders will have tags added or removed in line with product additions or removals. Run this task manually to scan your store's order history, tagging older orders that qualify, and untagging those that have been edited and no longer do.

Note: If more than one required product tag is specified, this task will look for products that _individually_ contain _all_ of the tags provided.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-that-contain-a-matching-product), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-contain-a-matching-product.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
