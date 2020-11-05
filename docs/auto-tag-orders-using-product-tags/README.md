# Auto-tag orders using product tags

Use this task to tag incoming orders with all the product tags in the order. Optionally, specify a specific list of tags to be copied, and/or a certain tag prefix to watch for. Can be run manually, to scan and tag historical orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-using-product-tags](https://usemechanic.com/task/auto-tag-orders-using-product-tags)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-using-product-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_copy_these_tags__array": null,
  "only_copy_tags_having_this_prefix": null
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

Use this task to tag incoming orders with all the product tags in the order. Optionally, specify a specific list of tags to be copied, and/or a certain tag prefix to watch for. Can be run manually, to scan and tag historical orders.

Use this task to tag incoming orders with all the product tags in the order. Optionally, specify a specific list of tags to be copied, and/or a certain tag prefix to watch for.

Run this task manually to scan and tag all orders, in bulk.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-using-product-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-using-product-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
