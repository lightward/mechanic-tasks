# Unpublish products that have been out of stock for x days

* [task.json](../../tasks/unpublish-products-that-have-been-out-of-stock-for-x-days.json) (for import/export)
* [Task script](./script.liquid)

This task monitors for inventory changes, and records the time when a product's inventory falls to 0 or less. Then, on an hourly basis, the task will unpublish any products with a recorded out-of-stock time of at least x days ago.

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

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/scheduler/hourly
```

## Documentation

This task monitors for inventory changes, and records the time when a product's inventory falls to 0 or less. Then, on an hourly basis, the task will unpublish any products with a recorded out-of-stock time of at least x days ago.

This task watches for inventory updates. When a product's total inventory becomes 0 or less, the current time will be recorded for that product. Then, on an hourly basis, this task will unpublish any products with a recorded out-of-stock time of at least x days ago.

Notes:

* The first time the hourly scan runs, it may encounter products that were already out of stock, before this task was installed. For those products, the _current_ time will be recorded as their out-of-stock time. This means that these products will wait for another x days before being automatically unpublished.
* If a product that this task unpublishes is manually published, and its total inventory is still 0 or less, this task will unpublish it again during its next hourly scan.
* This task includes a test mode. Enable it to have the task report what it _would_ do, if test mode was disabled.
