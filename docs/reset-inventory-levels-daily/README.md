# Reset inventory levels daily

Tags: Inventory, Schedule

This task resets your inventory levels at the default location in your shop, every night, for all products within a given collection (configured by ID).

* View in the task library: [tasks.mechanic.dev/reset-inventory-levels-daily](https://tasks.mechanic.dev/reset-inventory-levels-daily)
* Task JSON, for direct import: [task.json](../../tasks/reset-inventory-levels-daily.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "inventory_level_to_apply__number_required": null,
  "collection_id__number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task resets your inventory levels at the default location in your shop, every night, for all products within a given collection (configured by ID).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/reset-inventory-levels-daily), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-inventory-levels-daily.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
