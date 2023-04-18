# Reset all inventory levels to a single level, in bulk

Tags: Inventory

A utility task, this one is useful for those one-off moments when your inventory needs a clean slate. Run this task manually to reset all of your inventory, across your entire store and for all locations, to the single level of your choice. No exceptions, no filters.

* View in the task library: [tasks.mechanic.dev/reset-all-inventory-levels-to-a-single-level-in-bulk](https://tasks.mechanic.dev/reset-all-inventory-levels-to-a-single-level-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/reset-all-inventory-levels-to-a-single-level-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "reset_all_inventory_items_to_this_level__number_required": 0
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

A utility task, this one is useful for those one-off moments when your inventory needs a clean slate. Run this task manually to reset all of your inventory, across your entire store and for all locations, to the single level of your choice. No exceptions, no filters.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/reset-all-inventory-levels-to-a-single-level-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-all-inventory-levels-to-a-single-level-in-bulk.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
