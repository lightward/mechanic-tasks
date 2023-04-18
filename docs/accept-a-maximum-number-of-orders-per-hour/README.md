# Accept a maximum number of orders per hour

Tags: Max Orders, Orders

This task works by monitoring the number of orders created per hour, and clearing the inventory for all in-stock items when the hourly order limit is reached. Optionally, this task can restore inventory to its original levels at minute zero of the next hour, or on demand.

* View in the task library: [tasks.mechanic.dev/accept-a-maximum-number-of-orders-per-hour](https://tasks.mechanic.dev/accept-a-maximum-number-of-orders-per-hour)
* Task JSON, for direct import: [task.json](../../tasks/accept-a-maximum-number-of-orders-per-hour.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "maximum_hourly_orders__number_required": 10,
  "only_count_orders_matching_this_query": "-status:cancelled",
  "only_clear_inventory_for_products_with_this_tag": null,
  "restore_inventory_levels_the_next_hour__boolean": true,
  "restore_inventory_levels_on_demand__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
{% if options.restore_inventory_levels_the_next_hour__boolean %}
  mechanic/scheduler/hourly
{% endif %}
{% if options.restore_inventory_levels_on_demand__boolean %}
  mechanic/user/trigger
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task works by monitoring the number of orders created per hour, and clearing the inventory for all in-stock items when the hourly order limit is reached. Optionally, this task can restore inventory to its original levels at minute zero of the next hour, or on demand.

This task works by setting your inventory to zero when the hourly order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) There are no popups, or any specific messaging - your inventory will simply be dropped to zero, and if your shop is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

Optionally, this task can restore inventory to its original levels at midnight the next hour, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.)
​
**This task _does not_ work well when you have multiple orders per minute, and we do not recommend using it for high-volume stores.** It works by counting the current hour's orders, at the time of each purchase - if the current count exactly equals your maximum, it performs the inventory reset. Because that counting process can take a few seconds, receiving multiple orders per minute can result in missing that very specific window when the current count exactly equals your maximum.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/accept-a-maximum-number-of-orders-per-hour), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/accept-a-maximum-number-of-orders-per-hour.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
