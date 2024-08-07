# Tag customers by order tier

Tags: Customers, Loyalty, Retention, Tag

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals (i.e. total spend). Optionally, configure a customer segment query, limiting the set of customers that are processed. You may also configure an order query, specifying for things like a rolling time period, or fulfillment status. This task is useful for rewarding customers who establish or maintain a specific spend level.

* View in the task library: [tasks.mechanic.dev/tag-customers-by-order-tier](https://tasks.mechanic.dev/tag-customers-by-order-tier)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-by-order-tier.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tags_and_order_minimums__keyval_number_required": {
    "10-orders": "10",
    "100-orders": "100"
  },
  "only_keep_the_customer_tag_for_the_highest_order_minimum__boolean": true,
  "tag_customers_by_number_of_orders__boolean": true,
  "tag_customers_by_sum_of_order_totals__boolean": null,
  "only_process_customers_matching_this_segment_query": "customer_account_status = 'ENABLED' AND customer_tags CONTAINS 'qualifies'",
  "only_count_orders_matching_this_query": "financial_status:paid created_at:>={{ \"now - 1 year\" | date: \"%Y-%m-%d\" }}",
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals (i.e. total spend). Optionally, configure a customer segment query, limiting the set of customers that are processed. You may also configure an order query, specifying for things like a rolling time period, or fulfillment status. This task is useful for rewarding customers who establish or maintain a specific spend level.

Configure the tier tags on the left-hand side of the "Customer tags and order minimums" field, and the corresponding minimium numbers on the right.

The options for querying customers and orders use the specific query syntax as found in the "Customers / Segments" and "Orders" sections of the Shopify admin areas respectively.

For example, to only count customers with enabled online accounts who are tagged with "qualifies", use this customer segment query:

```
customer_account_status = 'ENABLED' AND customer_tags CONTAINS 'qualifies'
```

To count paid orders from the last 365 days, use this orders query:

```
financial_status:paid created_at:>={{ "now - 1 year" | date: "%Y-%m-%d" }}
```

**Important:** The customer segment query must use the **exact** casing and syntax as a query that is run from the customer segments admin screen. More information on the the syntax for these can be found [here](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-by-order-tier), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-by-order-tier.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
