# Accept a maximum number of orders per day

* [task.json](../../tasks/accept-a-maximum-number-of-orders-per-day.json) (for import/export)
* [Task script](./script.liquid)

This task works by setting your inventory to zero when the order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) There are no popups, or any specific messaging - your inventory will simply be dropped to zero, and if your shop is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

## Default options

```json
{
  "maximum_daily_orders__number_required": "10",
  "only_clear_inventory_for_products_with_this_tag": "",
  "prepend_this_html_to_product_description__multiline": "",
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

Optionally, this task can restore inventory to its original levels at midnight the next day, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.). You may also choose to prepend an HTML string to the product description for each product whose inventory levels are dropped to zero by this task. The original product description will be restored whenever the inventory levels are restored by this task. 

### Important notes

* ​This task only works for products that have inventory tracking enabled, which are configured to be unavailable when out of stock. This means that the "Track quantity" product option needs to be enabled, and the "Continue selling when out of stock" option needs to be disabled, for all products.
* **This task may be not behave as intended if you receive multiple orders per minute. We don't recommend using it for high-volume stores.**
