# Accept a maximum number of orders per day

This task works by setting your inventory to zero when the order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) When the limit is reached, your inventory will be dropped to zero. If your store is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

* View in the task library: [usemechanic.com/task/accept-a-maximum-number-of-orders-per-day](https://usemechanic.com/task/accept-a-maximum-number-of-orders-per-day)
* Task JSON, for direct import: [task.json](../../tasks/accept-a-maximum-number-of-orders-per-day.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "maximum_daily_orders__number_required": "10",
  "only_clear_inventory_for_products_with_this_tag": "",
  "prepend_this_html_to_product_description_when_order_limit_is_reached__multiline": null,
  "restore_inventory_levels_the_next_day__boolean": true,
  "restore_inventory_levels_on_demand__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

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

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task works by setting your inventory to zero when the order limit is reached. (Specifically, this means setting inventory levels to 0 for all items that have a greater-than-zero inventory level.) When the limit is reached, your inventory will be dropped to zero. If your store is configured to stop selling out-of-stock products, your customers will be prevented from making additional purchases.

Optionally, you may choose an HTML message to be prepended to the product description, for each product whose inventory levels are dropped to zero by this task. This is useful for communicating _why_ the product is unavailable. (The original product description will be restored when inventory is restored.)

And, this task can restore inventory to its original levels at midnight the next day, or on demand. (Restore levels on demand by enabling this option, then using the "Run task" button.).

### Important notes

* ​This task only works for products that have inventory tracking enabled, which are configured to be unavailable when out of stock. This means that the "Track quantity" product option needs to be enabled, and the "Continue selling when out of stock" option needs to be disabled, for all products.
* The original product description will be restored whenever the inventory levels are restored by this task.
* **This task may be not behave as intended if you receive multiple orders per minute. We don't recommend using it for high-volume stores.**

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/accept-a-maximum-number-of-orders-per-day), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/accept-a-maximum-number-of-orders-per-day.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
