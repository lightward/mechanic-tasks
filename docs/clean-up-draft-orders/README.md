# Clean up draft orders

Use this task to quickly delete draft orders from your account, optionally filtering by status, or by draft order age. Useful for keeping things tidy. :)

* View in the task library: [usemechanic.com/task/clean-up-draft-orders](https://usemechanic.com/task/clean-up-draft-orders)
* Task JSON, for direct import: [task.json](../../tasks/clean-up-draft-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "delete_open_draft_orders__boolean": null,
  "delete_draft_orders_that_have_invoices_sent__boolean": null,
  "delete_completed_draft_orders__boolean": null,
  "minimum_draft_order_age_in_days__number": null,
  "run_daily_at_midnight__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily_at_midnight__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to quickly delete draft orders from your account, optionally filtering by status, or by draft order age. Useful for keeping things tidy. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/clean-up-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/clean-up-draft-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
