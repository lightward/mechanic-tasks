# Tag customers by order tier

Tags: Tag, Customers, Loyalty, Retention

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals (i.e. total spend). Optionally, configure a customers query, limiting the set of customers that are processed. You may also configure an order query, specifying for things like a rolling time period, or fulfillment status. This task is useful for rewarding customers who establish or maintain a specific spend level.

* View in the task library: [usemechanic.com/task/tag-customers-by-order-tier](https://usemechanic.com/task/tag-customers-by-order-tier)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-by-order-tier.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_minimums_and_customer_tags__keyval_required": {
    "10": "10-orders",
    "100": "100-orders"
  },
  "only_keep_the_customer_tag_for_the_highest_order_minimum__boolean": true,
  "tag_customers_by_number_of_orders__boolean": true,
  "tag_customers_by_sum_of_order_totals__boolean": null,
  "only_process_customers_matching_this_query": "state:enabled tag:qualifies",
  "only_count_orders_matching_this_query": "financial_status:paid created_at:>={{ \"now\" | date: \"%s\" | minus: 31536000 | date: \"%Y-%m-%d\" }}",
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals (i.e. total spend). Optionally, configure a customers query, limiting the set of customers that are processed. You may also configure an order query, specifying for things like a rolling time period, or fulfillment status. This task is useful for rewarding customers who establish or maintain a specific spend level.

The options for querying customers and orders use the same query syntax as the "Customers" and "Orders" section of the Shopify admin area. For example, to only count customers with enabled online accounts who are tagged with "qualifies", use this customers query:

```
state:enabled tag:qualifies
```

To count paid orders from the last 365 days, use this orders query:

```
financial_status:paid created_at:>={{ "now" | date: "%s" | minus: 31536000 | date: "%Y-%m-%d" }}
```

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tag-customers-by-order-tier), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-by-order-tier.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
