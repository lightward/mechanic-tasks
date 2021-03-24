# Auto-tag orders from recurring client IP addresses

Tags: Auto-Tag, Orders, Risk

Use this task to regularly scan for repeat orders from a single IP address, by tagging any orders from an IP address that's placed more than a configurable threshold of orders in the last x days of order history.

* View in the task library: [usemechanic.com/task/auto-tag-orders-from-recurring-client-ip-addresses](https://usemechanic.com/task/auto-tag-orders-from-recurring-client-ip-addresses)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-from-recurring-client-ip-addresses.json)
* Preview task code: [script.liquid](./script.liquid)

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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

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

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to regularly scan for repeat orders from a single IP address, by tagging any orders from an IP address that's placed more than a configurable threshold of orders in the last x days of order history.

This task works via manual or scheduled scans of order history - it does not run immediately when orders are created. Instead, whenever it runs, it scans the last x days of order history, tagging orders that come from an IP address whose order count has met or exceeded your threshold.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-from-recurring-client-ip-addresses), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-from-recurring-client-ip-addresses.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
