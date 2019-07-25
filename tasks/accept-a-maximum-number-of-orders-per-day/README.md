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

This task works by monitoring the number of orders created per day, and clearing the inventory for all in-stock items when the daily order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.)

Optionally, this task can restore inventory to its original levels at midnight the next day, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.)