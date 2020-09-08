# Tag customers by order tier

* [Task script](./script.liquid)

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals (i.e. total spend). Optionally, configure an order query, specifying for things like a rolling time period, or fulfillment status. Useful for rewarding customers who establish or maintain a specific spend level.

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
  "only_tag_customers_with_an_active_account__boolean": null,
  "only_count_orders_matching_this_query": "financial_status:paid created_at:>={{ \"now\" | date: \"%s\" | minus: 31536000 | date: \"%Y-%m-%d\" }}",
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

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

## Documentation

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals (i.e. total spend).

The "Only count orders matching this query" option uses the same query syntax as the "Orders" section of the Shopify admin area. For example, to only count paid orders from the last 365 days, use this query:

```
financial_status:paid created_at:>={{ "now" | date: "%s" | minus: 31536000 | date: "%Y-%m-%d" }}
```