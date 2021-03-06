# Sync inventory for shared SKUs

This task monitors all variants having a SKU that you configure, and ensures that changes to inventory quantity are reflected across all variants sharing that SKU.

* View in the task library: [usemechanic.com/task/sync-inventory-for-shared-skus](https://usemechanic.com/task/sync-inventory-for-shared-skus)
* Task JSON, for direct import: [task.json](../../tasks/sync-inventory-for-shared-skus.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_skus_to_monitor__array_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/10min
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors all variants having a SKU that you configure, and ensures that changes to inventory quantity are reflected across all variants sharing that SKU.

To set up this task, configure with the SKUs you'd like to monitor, manually synchronize all inventory quantities for those SKUs, then click the "Run task" button. This task will take a snapshot of the current inventory quantity for your SKUs. When the task automatically runs, every 10 minutes, it will check for changes to inventory, and ensure that the total change for a SKU is reflected across all product variants having that SKU.

__Note: this task only considers a store's default location when managing inventory.__

YouTube: [How this task was made](https://youtu.be/CoWvIdibz9Y)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/sync-inventory-for-shared-skus), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-inventory-for-shared-skus.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
