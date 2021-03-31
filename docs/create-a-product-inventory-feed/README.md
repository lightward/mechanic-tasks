# Create a product inventory feed

Tags: Feeds, Inventory, Products

This task, paired with the linked instructions, creates a feed of product inventory (optionally filtering by product type).

* View in the task library: [usemechanic.com/task/create-a-product-inventory-feed](https://usemechanic.com/task/create-a-product-inventory-feed)
* Task JSON, for direct import: [task.json](../../tasks/create-a-product-inventory-feed.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "filter_by_product_type": "Shirt"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
mechanic/scheduler/daily+12.hours
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task, paired with the linked instructions, creates a feed of product inventory (optionally filtering by product type).

This task creates a regularly-updated feed, available at yourstore.com/pages/feed. Follow these required instructions to configure your store:

[Tutorial: Creating scheduled feeds with Mechanic](https://help.usemechanic.com/tutorials/creating-scheduled-feeds)

Note: This task fetches up to 30 variants per product.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/create-a-product-inventory-feed), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/create-a-product-inventory-feed.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
