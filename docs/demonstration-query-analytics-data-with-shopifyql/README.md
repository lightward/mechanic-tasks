# Demonstration, Tutorial: Query analytics data with ShopifyQL

Tags: Analytics, Demonstration, ShopifyQL, Tutorial

This task demonstrates how to structure Mechanic Liquid to send and receive the results of a ShopifyQL query. The default query has been adapted from the *Total sales by vendor* report available in Shopify Analytics.

* View in the task library: [tasks.mechanic.dev/demonstration-query-analytics-data-with-shopifyql](https://tasks.mechanic.dev/demonstration-query-analytics-data-with-shopifyql)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-query-analytics-data-with-shopifyql.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "shopifyql_query__multiline_required": "FROM sales\nSHOW net_items_sold, gross_sales, discounts, returns, net_sales, taxes, total_sales\nWHERE product_vendor IS NOT NULL\nGROUP BY product_vendor\nDURING last_year\nORDER BY total_sales DESC"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task demonstrates how to structure Mechanic Liquid to send and receive the results of a ShopifyQL query. The default query has been adapted from the *Total sales by vendor* report available in Shopify Analytics.

The task uses a task options field for saving/editing the ShopifyQL query syntax, however, this syntax could be captured directly in the task code instead. Either way, a custom task will need to adapt to the field names returned by that specific ShopifyQL query.

### Want to Learn More?
Review the [Query analytics data with ShopifyQL](https://learn.mechanic.dev/resources/tutorials/query-analytics-data-with-shopifyql) tutorial for helpful info and development links.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-query-analytics-data-with-shopifyql), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-query-analytics-data-with-shopifyql.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
