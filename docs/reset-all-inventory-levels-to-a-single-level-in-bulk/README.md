# Reset all inventory levels to a single level, in bulk

Tags: Inventory

A utility task, this one is useful for those one-off moments when your inventory needs a clean slate. Run this task manually to reset all of your inventory, across your entire store and for all locations, to the single level of your choice. No exceptions, no filters.

* View in the task library: [usemechanic.com/task/reset-all-inventory-levels-to-a-single-level-in-bulk](https://usemechanic.com/task/reset-all-inventory-levels-to-a-single-level-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/reset-all-inventory-levels-to-a-single-level-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "reset_all_inventory_items_to_this_level__number_required": 0,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

A utility task, this one is useful for those one-off moments when your inventory needs a clean slate. Run this task manually to reset all of your inventory, across your entire store and for all locations, to the single level of your choice. No exceptions, no filters.

Use test mode to see a preview of what this task _would_ do, if test mode were not enabled.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/reset-all-inventory-levels-to-a-single-level-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reset-all-inventory-levels-to-a-single-level-in-bulk.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
