# Sync inventory for shared SKUs

Tags: Inventory, SKU, Sync

This task monitors all variants having a SKU that you configure, and ensures that changes to the available inventory quantity are reflected across all variants sharing that SKU.

* View in the task library: [tasks.mechanic.dev/sync-inventory-for-shared-skus](https://tasks.mechanic.dev/sync-inventory-for-shared-skus)
* Task JSON, for direct import: [task.json](../../tasks/sync-inventory-for-shared-skus.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_skus_to_monitor__array_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/10min
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors all variants having a SKU that you configure, and ensures that changes to the available inventory quantity are reflected across all variants sharing that SKU.

First, manually set all available inventory quantities to be equal for each of the SKUs you'd like to monitor. Then manually run this task which will then take a snapshot of the current available inventory quantity for your SKUs. When the task automatically runs, every 10 minutes, it will check for changes to inventory, and ensure that the cumulative change for a SKU is reflected across all product variants sharing that SKU.

**Note:** This task only considers a store's default location when managing inventory.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-inventory-for-shared-skus), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-inventory-for-shared-skus.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
