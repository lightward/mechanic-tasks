# Reset negative inventory levels to zero in bulk

Super simple. Scans all inventory levels in your store, on demand, and brings the negative ones back up to zero. Optionally, configure this task to run nightly.

* View in the task library: [usemechanic.com/task/reset-negative-inventory-levels-to-zero-in-bulk](https://usemechanic.com/task/reset-negative-inventory-levels-to-zero-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/reset-negative-inventory-levels-to-zero-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
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

mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Super simple. Scans all inventory levels in your store, on demand, and brings the negative ones back up to zero. Optionally, configure this task to run nightly.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/reset-negative-inventory-levels-to-zero-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-negative-inventory-levels-to-zero-in-bulk.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
