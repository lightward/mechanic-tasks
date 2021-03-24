# Unpublish products that have been out of stock for x days

Tags: Unpublish, Products, Inventory

This task monitors for inventory changes, and records the time when a product's inventory falls to 0 or less. Then, on an hourly basis, the task will unpublish any products with a recorded out-of-stock time of at least x days ago.

* View in the task library: [usemechanic.com/task/unpublish-products-that-have-been-out-of-stock-for-x-days](https://usemechanic.com/task/unpublish-products-that-have-been-out-of-stock-for-x-days)
* Task JSON, for direct import: [task.json](../../tasks/unpublish-products-that-have-been-out-of-stock-for-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "number_of_days_to_wait_before_unpublishing__number_required": null,
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "test_mode__boolean": true,
  "only_include_products_matching_this_search_query": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/scheduler/hourly
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors for inventory changes, and records the time when a product's inventory falls to 0 or less. Then, on an hourly basis, the task will unpublish any products with a recorded out-of-stock time of at least x days ago.

This task watches for inventory updates. When a product's total inventory becomes 0 or less, the current time will be recorded for that product. Then, on an hourly basis, this task will unpublish any products with a recorded out-of-stock time of at least x days ago.

Notes:

* The first time the hourly scan runs, it may encounter products that were already out of stock, before this task was installed. For those products, the _current_ time will be recorded as their out-of-stock time. This means that these products will wait for another x days before being automatically unpublished.
* If a product that this task unpublishes is manually published, and its total inventory is still 0 or less, this task will unpublish it again during its next hourly scan.
* This task includes a test mode. Enable it to have the task report what it _would_ do, if test mode was disabled.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/unpublish-products-that-have-been-out-of-stock-for-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-products-that-have-been-out-of-stock-for-x-days.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
