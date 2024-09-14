# Auto-tag customers with product tags from their order

Tags: Auto-Tag, Customers, Products

When orders come in, this task will copy tags from the order's products to the customer. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, configure this task to only copy certain product tags.

* View in the task library: [tasks.mechanic.dev/tag-customers-with-product-tags-from-their-order](https://tasks.mechanic.dev/tag-customers-with-product-tags-from-their-order)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-with-product-tags-from-their-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "limit_to_customers_matching_this_query_for_manual_runs": "number_of_orders > 0",
  "only_copy_these_tags__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When orders come in, this task will copy tags from the order's products to the customer. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, configure this task to only copy certain product tags.

This task may be run manually, to scan and tag customers based on the configured criteria. You may also configure a customer segment query, limiting the set of customers that are processed on manual runs. For example, to only include customers that have placed at least one order, use this query: `number_of_orders > 0`

**Important:** The customer segment query must use the **exact** casing and syntax as a query that is run from the customer segments admin screen. More information on the the syntax for these can be found [here](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-with-product-tags-from-their-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-with-product-tags-from-their-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
