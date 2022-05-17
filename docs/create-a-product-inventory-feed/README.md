# Create a product inventory CSV feed

Tags: Feeds, Inventory, Products

This task, paired with the linked instructions, creates a feed of product inventory (optionally filtering by product type).

* View in the task library: [tasks.mechanic.dev/create-a-product-inventory-feed](https://tasks.mechanic.dev/create-a-product-inventory-feed)
* Task JSON, for direct import: [task.json](../../tasks/create-a-product-inventory-feed.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "filter_by_product_type": "Shirt"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
mechanic/scheduler/daily+12.hours
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task, paired with the linked instructions, creates a feed of product inventory (optionally filtering by product type).

This task creates a regularly-updated feed, available at yourstore.com/pages/feed. Follow these required instructions to configure your store:

[Tutorial: Creating scheduled CSV feeds](https://learn.mechanic.dev/resources/tutorials/creating-scheduled-csv-feeds)

Note: This task fetches up to 30 variants per product.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/create-a-product-inventory-feed), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/create-a-product-inventory-feed.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
