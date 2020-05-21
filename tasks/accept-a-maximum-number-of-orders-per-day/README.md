# Accept a maximum number of orders per day

* [Task script](./script.liquid)

This task works by monitoring the number of orders created per day, and clearing the inventory for all in-stock items when the daily order limit is reached. Optionally, this task can restore inventory to its original levels at midnight the next day, or on demand.

## Default options

```json
{
  "maximum_daily_orders__number_required": "10",
  "only_clear_inventory_for_products_with_this_tag": "",
  "restore_inventory_levels_the_next_day__boolean": true,
  "restore_inventory_levels_on_demand__boolean": false
}
```

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

## Documentation

This task works by setting your inventory to zero when the order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) There are no popups, or any specific messaging - your inventory will simply be dropped to zero, and if your shop is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

Optionally, this task can restore inventory to its original levels at midnight the next day, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.)
​
This task _does not_ work well when you have multiple orders per minute. It works by counting the current day's orders, at the time of each purchase - if the current count exactly equals your maximum, it performs the inventory reset. Because that counting process can take a few seconds, receiving multiple orders per minute can result in missing that very specific window when the current count exactly equals your maximum.