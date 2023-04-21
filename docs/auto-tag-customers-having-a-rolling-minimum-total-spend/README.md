# Auto-tag customers having a rolling minimum total spend

Tags: Auto-Tag, Customers, Spend

Use this task to tag customers who reach a certain spending threshold, by scanning a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-having-a-rolling-minimum-total-spend](https://tasks.mechanic.dev/auto-tag-customers-having-a-rolling-minimum-total-spend)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-having-a-rolling-minimum-total-spend.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_total_spent__number_required": null,
  "customer_tag_to_apply__required": null,
  "days_of_order_history_to_consider__number_required": 30,
  "only_monitor_customers_having_this_tag": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
mechanic/shopify/bulk_operation
shopify/orders/create
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag customers who reach a certain spending threshold, by scanning a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

Run this task manually to scan all of your customers. **This may take some time!**

This task will also scan all customers on a nightly basis, and will run for a single customer every time a customer's order is paid or cancelled.

Note: By default, Mechanic only scans the last 60 days of order history. To change this, [enable the option in Mehanic's settings](https://learn.mechanic.dev/platform/shopify/read-all-orders#configuration).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-having-a-rolling-minimum-total-spend), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-having-a-rolling-minimum-total-spend.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
