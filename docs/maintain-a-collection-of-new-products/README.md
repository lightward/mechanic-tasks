# Maintain a collection of new products

Tags: Collections, Products, Watch

Use this task to maintain a "New Products" collection, specifying either a number of products to include or the number of days to keep each product around. Easy! :)

* View in the task library: [tasks.mechanic.dev/maintain-a-collection-of-new-products](https://tasks.mechanic.dev/maintain-a-collection-of-new-products)
* Task JSON, for direct import: [task.json](../../tasks/maintain-a-collection-of-new-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "number_of_days_to_keep_a_product_in_this_collection__number": null,
  "number_of_products_to_keep_in_this_collection__number": null,
  "collection_id__number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to maintain a "New Products" collection, specifying either a number of products to include or the number of days to keep each product around. Easy! :)

To use this task, create a manual collection, and add the collection ID to the task options. (Find the ID by opening the collection in the Shopify admin, then looking at the URL in your browser's address bar. If the URL is https://example.myshopify.com/admin/collections/12345, the collection ID is 12345.)

Use the "Run task" button to populate your collection for the first time. After that, this task will run daily, at midnight in your local timezone. During each run, the task will update the collection, adding new products and removing old ones as appropriate.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/maintain-a-collection-of-new-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-a-collection-of-new-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
