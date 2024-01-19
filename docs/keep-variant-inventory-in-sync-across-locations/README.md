# Keep variant inventory in sync across locations

Tags: Inventory, Location, Sync, Variants

When an inventory level is updated, this task will adjust the "available" inventory for all other locations of the **same** variant to be the same quantity. Optionally, configure this task to filter for specific product types. Leaving this option blank means the task will monitor and update inventory for all products in the shop.

* View in the task library: [tasks.mechanic.dev/keep-variant-inventory-in-sync-across-locations](https://tasks.mechanic.dev/keep-variant-inventory-in-sync-across-locations)
* Task JSON, for direct import: [task.json](../../tasks/keep-variant-inventory-in-sync-across-locations.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "filter_by_these_product_types__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When an inventory level is updated, this task will adjust the "available" inventory for all other locations of the **same** variant to be the same quantity. Optionally, configure this task to filter for specific product types. Leaving this option blank means the task will monitor and update inventory for all products in the shop.

**CAUTION**: This task might not make accurate adjustments in certain high-volume scenarios. For example, an inventory import that sets mismatched inventory levels for a variant monitored by this task will cause a cascading effect of reapplying the deltas between each incorrect inventory level.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/keep-variant-inventory-in-sync-across-locations), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/keep-variant-inventory-in-sync-across-locations.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
