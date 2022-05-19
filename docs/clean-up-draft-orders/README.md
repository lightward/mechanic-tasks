# Clean up draft orders

Tags: Draft Orders, Orders

Use this task to quickly delete draft orders from your account, optionally filtering by status, or by draft order age. Useful for keeping things tidy. :)

* View in the task library: [tasks.mechanic.dev/clean-up-draft-orders](https://tasks.mechanic.dev/clean-up-draft-orders)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily_at_midnight__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to quickly delete draft orders from your account, optionally filtering by status, or by draft order age. Useful for keeping things tidy. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/clean-up-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/clean-up-draft-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
