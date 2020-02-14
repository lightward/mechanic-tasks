# Tag customers by order tier

* [Task script](./script.liquid)

Use this task to tag customers by tier, based on how many orders they've placed or by the sum of all their order totals. Optionally, configure an order query, allowing you to apply purchase tiers based on the last month of orders, or based only on fulfilled orders, etc.

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
  "only_count_orders_matching_this_query": null,
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

(none)