# Tag customers when their last order is before/after x days ago

Tags: Auto-Tag, Customers, Loyalty

Running daily, hourly, or manually, this task scans all customers and tags them based on the date of their last order. Choose between tagging customers whose orders are before x days ago, or after x days ago.

* View in the task library: [tasks.mechanic.dev/tag-customers-when-their-last-order-is-before-after-x-days-ago](https://tasks.mechanic.dev/tag-customers-when-their-last-order-is-before-after-x-days-ago)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-when-their-last-order-is-before-after-x-days-ago.json)
* Preview task code: [script.liquid](./script.liquid)

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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

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

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Running daily, hourly, or manually, this task scans all customers and tags them based on the date of their last order. Choose between tagging customers whose orders are before x days ago, or after x days ago.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-when-their-last-order-is-before-after-x-days-ago), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-when-their-last-order-is-before-after-x-days-ago.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
