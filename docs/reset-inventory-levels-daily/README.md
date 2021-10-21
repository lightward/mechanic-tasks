# Reset inventory levels daily

Tags: Inventory, Schedule

Use this task to bring all of your inventory levels to the same place, every night.

* View in the task library: [usemechanic.com/task/reset-inventory-levels-daily](https://usemechanic.com/task/reset-inventory-levels-daily)
* Task JSON, for direct import: [task.json](../../tasks/reset-inventory-levels-daily.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "inventory_level_to_apply__number_required": null,
  "collection_id__number_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to bring all of your inventory levels to the same place, every night.

This task resets your inventory levels every night, for a given collection ID.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/reset-inventory-levels-daily), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-inventory-levels-daily.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
