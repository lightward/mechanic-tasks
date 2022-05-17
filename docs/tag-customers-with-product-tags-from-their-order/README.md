# Auto-tag customers with product tags from their order

Tags: Auto-Tag, Customers, Products

When orders come in, use this task to copy product tags from the order to the customer on file. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, optionally configure this task to only look for a certain set of tags. This task supports running manually, to scan and tag all customers based on their order history, or a subset of customers by using a query filter.

* View in the task library: [tasks.mechanic.dev/tag-customers-with-product-tags-from-their-order](https://tasks.mechanic.dev/tag-customers-with-product-tags-from-their-order)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-with-product-tags-from-their-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "limit_to_customers_matching_this_query_for_manual_runs": null,
  "only_copy_these_tags__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When orders come in, use this task to copy product tags from the order to the customer on file. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, optionally configure this task to only look for a certain set of tags. This task supports running manually, to scan and tag all customers based on their order history, or a subset of customers by using a query filter.

This task will scan the product tags for each order, as the order is created, and copy those tags over to the customer record. Run this task manually to process all orders, for all customers. (This may take some time!)

To keep things clean, fill in the "Only copy these tags" option with a comma-separated list of tags you want to watch for.

The "Limit to customers matching this query for manual runs" option uses the same query syntax as the "Customers" section of the Shopify admin area. For example, to only include customers that have more than one order, use this query:

orders_count:>1

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-with-product-tags-from-their-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-with-product-tags-from-their-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
