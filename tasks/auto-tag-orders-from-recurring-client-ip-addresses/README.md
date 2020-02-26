# Auto-tag orders from recurring client IP addresses

* [Task script](./script.liquid)

Use this task to regularly scan for repeat orders from a single IP address, by tagging any orders from an IP address that's placed more than a configurable threshold of orders in the last x days of order history.

## Default options

```json
{
  "days_of_order_history_to_scan__number": 3,
  "threshold_order_count_per_ip_address__number_required": 2,
  "order_tag_to_apply__required": null,
  "run_every_10_minutes__boolean": false,
  "run_hourly__boolean": false,
  "run_daily__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_every_10_minutes__boolean %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

This task works via manual or scheduled scans of order history - it does not run immediately when orders are created. Instead, whenever it runs, it scans the last x days of order history, tagging orders that come from an IP address whose order count has met or exceeded your threshold.