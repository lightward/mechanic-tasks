# Reset negative inventory levels to zero in bulk

Tags: Bulk, Inventory

Super simple. Scans all inventory levels in your store, on demand, and brings the negative ones back up to zero. Optionally, configure this task to run nightly.

* View in the task library: [tasks.mechanic.dev/reset-negative-inventory-levels-to-zero-in-bulk](https://tasks.mechanic.dev/reset-negative-inventory-levels-to-zero-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/reset-negative-inventory-levels-to-zero-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
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
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Super simple. Scans all inventory levels in your store, on demand, and brings the negative ones back up to zero. Optionally, configure this task to run nightly.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/reset-negative-inventory-levels-to-zero-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-negative-inventory-levels-to-zero-in-bulk.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
