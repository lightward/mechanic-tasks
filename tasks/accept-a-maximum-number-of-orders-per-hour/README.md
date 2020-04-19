# Accept a maximum number of orders per hour

* [Task script](./script.liquid)

This task works by monitoring the number of orders created per hour, and clearing the inventory for all in-stock items when the hourly order limit is reached. Optionally, this task can restore inventory to its original levels at minute zero of the next hour, or on demand.

## Default options

```json
{
  "maximum_hourly_orders__number_required": 10,
  "only_clear_inventory_for_products_with_this_tag": null,
  "restore_inventory_levels_the_next_hour__boolean": true,
  "restore_inventory_levels_on_demand__boolean": null
}
```

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

## Documentation

This task works by monitoring the number of orders created per hour, and clearing the inventory for all in-stock items when the hourly order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.)

Optionally, this task can restore inventory to its original levels at minute zero of the next hour, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.)