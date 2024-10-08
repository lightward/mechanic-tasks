# Auto-tag products in a manual collection

Tags: Auto-Tag, Collections, Products

If you prefer to categorize your products using manual collections, but you still need your tags to match up, use this task to monitor your manual collection and automatically tag the products it contains.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-in-a-manual-collection](https://tasks.mechanic.dev/auto-tag-products-in-a-manual-collection)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-in-a-manual-collection.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_tag__required": "sale",
  "collection_id__number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/collections/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

If you prefer to categorize your products using manual collections, but you still need your tags to match up, use this task to monitor your manual collection and automatically tag the products it contains.

Run this task manually to auto-tag products in your configured collection, and to untag any products that are not in this collection. Otherwise, this task will run automatically whenever the configured collection is updated, which includes the addition or removal of products.

This task only supports manual collections, not automated collections. ([Learn about the differences here.](https://help.shopify.com/en/manual/products/collections#collection-types)) Configure this task with your collection ID. [Learn how to find this.](https://learn.mechanic.dev/techniques/finding-a-resource-id)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-in-a-manual-collection), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-in-a-manual-collection.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
