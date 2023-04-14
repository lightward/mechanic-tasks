# Accept a maximum number of orders per day

Tags: Max Orders, Orders

This task works by setting your inventory to zero when the order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) When the limit is reached, your inventory will be dropped to zero. If your store is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

* View in the task library: [tasks.mechanic.dev/accept-a-maximum-number-of-orders-per-day](https://tasks.mechanic.dev/accept-a-maximum-number-of-orders-per-day)
* Task JSON, for direct import: [task.json](../../tasks/accept-a-maximum-number-of-orders-per-day.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "maximum_daily_orders__number_required": "10",
  "only_count_orders_matching_this_query": "-status:cancelled",
  "only_clear_inventory_for_products_with_this_tag": "",
  "restore_inventory_levels_the_next_day__boolean": true,
  "restore_inventory_levels_on_demand__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
{% if options.restore_inventory_levels_the_next_day__boolean %}
  mechanic/scheduler/daily
{% endif %}
{% if options.restore_inventory_levels_on_demand__boolean %}
  mechanic/user/trigger
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task works by setting your inventory to zero when the order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) When the limit is reached, your inventory will be dropped to zero. If your store is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

And, this task can restore inventory to its original levels at midnight the next day, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.).

### Important notes

* This task only works for products that have inventory tracking enabled, which are configured to be unavailable when out of stock. This means that the "Track quantity" product option needs to be enabled, and the "Continue selling when out of stock" option needs to be disabled, for all products.
* The "Only clear inventory for products with this tag" does _not_ change which orders are considered for the daily maximum. Use the "Only count orders matching this query" option to filter orders for counting, using the same order search syntax as the Shopify admin.
* The "Only clear inventory for products with this tag" setting is case-sensitive - it must match product tags exactly.
* **This task may be not behave as intended if you receive multiple orders per minute. We don't recommend using it for high-volume stores.**

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/accept-a-maximum-number-of-orders-per-day), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/accept-a-maximum-number-of-orders-per-day.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
