# Tag customers when their last order is before/after x days ago

* [task.json](../../tasks/tag-customers-when-their-last-order-is-before-after-x-days-ago.json) (for import/export)
* [Task script](./script.liquid)

Running daily, hourly, or manually, this task scans all customers and tags them based on the date of their last order. Choose between tagging customers whose orders are before x days ago, or after x days ago.

## Default options

```json
{
  "days_since_last_order__required_number": 7,
  "tag_customers_when_last_order_is_after__boolean": true,
  "tag_customers_when_last_order_is_before__boolean": null,
  "customer_tag__required": "recent-customer",
  "run_hourly__boolean": false,
  "run_daily__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

Running daily, hourly, or manually, this task scans all customers and tags them based on the date of their last order. Choose between tagging customers whose orders are before x days ago, or after x days ago.
