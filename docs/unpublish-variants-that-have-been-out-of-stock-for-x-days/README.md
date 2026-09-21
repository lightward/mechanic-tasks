# Unpublish variants that have been out of stock for x days

Tags: Inventory, Out of Stock, Unpublish, Variants

This task watches for inventory updates. When a variant's inventory quantity becomes 0 or less, the current time will be recorded for that variant. Then, on an hourly basis, this task will unpublish any variants with a recorded out-of-stock time of at least x days ago.

* View in the task library: [tasks.mechanic.dev/unpublish-variants-that-have-been-out-of-stock-for-x-days](https://tasks.mechanic.dev/unpublish-variants-that-have-been-out-of-stock-for-x-days)
* Task JSON, for direct import: [task.json](../../tasks/unpublish-variants-that-have-been-out-of-stock-for-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "number_of_days_to_wait_before_unpublishing__number_required": "0",
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "only_include_products_matching_this_search_query": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/scheduler/hourly
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for inventory updates. When a variant's inventory quantity becomes 0 or less, the current time will be recorded for that variant. Then, on an hourly basis, this task will unpublish any variants with a recorded out-of-stock time of at least x days ago.

**Notes:**

* The first time the hourly scan runs, it may encounter variants that were already out of stock, before this task was installed. For those variants, the _current_ time will be recorded as their out-of-stock time. This means that these variants will wait for another x days before being automatically unpublished.
* If a variant that this task unpublishes is manually published, and its inventory quantity is still 0 or less, this task will unpublish it again during its next hourly scan.
* This task includes a test mode. Enable it to have the task report what it _would_ do, if test mode was disabled.
* Shopify variant publishing states are independent of product publishing states; however, a published variant will not appear on a sales channel unless its parent product is also published to the same sales channel. See the [Shopify docs](https://help.shopify.com/en/manual/products/variants/publish-variants) for additional details on how product and variant publishing work together.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/unpublish-variants-that-have-been-out-of-stock-for-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-variants-that-have-been-out-of-stock-for-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
