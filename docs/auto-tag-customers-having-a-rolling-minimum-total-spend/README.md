# Auto-tag customers having a rolling minimum total spend

Tags: Auto-Tag, Customers, Spend

Use this task to tag customers who reach a certain spending threshold, by scanning a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

* View in the task library: [usemechanic.com/task/auto-tag-customers-having-a-rolling-minimum-total-spend](https://usemechanic.com/task/auto-tag-customers-having-a-rolling-minimum-total-spend)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
shopify/orders/create
shopify/orders/updated
shopify/orders/delete
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to tag customers who reach a certain spending threshold, by scanning a rolling period of order history. Useful for rewarding customers who keep a consistent spend total.

Run this task manually to scan all of your customers. **This may take some time!**

This task will also scan all customers on a nightly basis, and will run for a single customer every time a customer's order is paid or cancelled.

Note: By default, Mechanic only scans the last 60 days of order history. To change this, [follow this tutorial](https://help.usemechanic.com/tutorials/enabling-read_all_orders).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-having-a-rolling-minimum-total-spend), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-having-a-rolling-minimum-total-spend.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
