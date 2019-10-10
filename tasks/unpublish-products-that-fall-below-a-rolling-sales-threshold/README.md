# Unpublish products that fall below a rolling sales threshold

* [Task script](./script.liquid)

This task scans the last x days of orders, and unpublishes any products that haven't met your specified sales threshold during that time period, from whichever sales channel you select. By default, this task adds up the line item subtotals for each product (quantity times price), but it can also count by total quantity sold. This task only looks at products that were published before the time period being examined.

## Default options

```json
{
  "sales_channel_name__required": "Online Store",
  "number_of_days_back_to_look__number_required": 30,
  "minimum_sales_threshold_for_staying_published__number_required": null,
  "use_total_quantity_instead_of_line_item_subtotals__boolean": false,
  "test_mode__boolean": true,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

## Documentation

This task scans the last x days of orders, and unpublishes any products that haven't met your specified sales threshold during that time period. By default, this task adds up the line item subtotals for each product (quantity times price), but it can also count by total quantity sold. This task only looks at products that were published before the time period being examined.

Use test mode to ensure that this task does what you expect, before running it for real. :)