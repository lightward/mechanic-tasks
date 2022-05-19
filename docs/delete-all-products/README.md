# Delete all products

Tags: Delete, Products

Use this task to quickly (and permanently) clear out your product list. Optionally, filter by a specific query, so as to only delete specific products from your store. Supports a test mode, allowing you to see exactly what products you can expect Mechanic to delete.

* View in the task library: [tasks.mechanic.dev/delete-all-products](https://tasks.mechanic.dev/delete-all-products)
* Task JSON, for direct import: [task.json](../../tasks/delete-all-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "query": "",
  "test_mode__boolean": true,
  "live_mode__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to quickly (and permanently) clear out your product list. Optionally, filter by a specific query, so as to only delete specific products from your store. Supports a test mode, allowing you to see exactly what products you can expect Mechanic to delete.

Use this task to quickly clear out your product list.

**Caution: if you leave the query option empty, this task will delete every product in your store.**

Use the "query" setting to get specific about what products you want to delete. Tick the "Test mode" checkbox to verify which products will be deleted: after saving, use the "Run task" button to run the product scan, and you'll receive a list of products that Mechanic would have deleted in live mode. Once you're ready, uncheck the "Test mode" box and check the "Live mode" box, save the task, then use "Run task" to permanently delete all matching products.

Example queries:

* `product_type:Shirt`
* `tag:old`

Learn more:

* [Supported query options](https://help.shopify.com/en/api/graphql-admin-api/reference/queryroot#products-2019-07)
* [Query search syntax](https://help.shopify.com/api/getting-started/search-syntax)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-all-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-all-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
