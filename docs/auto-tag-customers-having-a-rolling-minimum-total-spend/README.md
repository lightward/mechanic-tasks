# Auto-tag customers having a rolling minimum total spend

Tags: Auto-Tag, Customers, Spend

This task runs daily to maintain tags for any customers that have a certain spending threshold within a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-having-a-rolling-minimum-total-spend](https://tasks.mechanic.dev/auto-tag-customers-having-a-rolling-minimum-total-spend)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-having-a-rolling-minimum-total-spend.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_total_spent__number_required": null,
  "customer_tag_to_apply__required": null,
  "days_of_order_history_to_consider__number_required": 30,
  "only_monitor_customers_having_this_tag": null,
  "run_hourly_instead_of_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_hourly_instead_of_daily__boolean %}
  mechanic/scheduler/hourly
{% else %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs daily to maintain tags for any customers that have a certain spending threshold within a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

Optionally, choose to filter by customers who have a specific tag, or to run hourly instead of daily for increased tagging frequency.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-having-a-rolling-minimum-total-spend), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-having-a-rolling-minimum-total-spend.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
