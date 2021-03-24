# Tag products as in- or out-of-stock

Tags: Auto-Tag, Products, Inventory, Out of Stock, In Stock

This task scans your products, in bulk, and tags them according to whether or not they're in stock. Optionally, configure this task to monitor products for live auto-tagging.

* View in the task library: [usemechanic.com/task/tag-products-as-in-or-out-of-stock](https://usemechanic.com/task/tag-products-as-in-or-out-of-stock)
* Task JSON, for direct import: [task.json](../../tasks/tag-products-as-in-or-out-of-stock.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "in_stock_tag__required": "in-stock",
  "out_of_stock_tag__required": "out-of-stock",
  "monitor_products_for_inventory_updates__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.monitor_products_for_inventory_updates__boolean %}
  shopify/products/create
  shopify/products/update
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans your products, in bulk, and tags them according to whether or not they're in stock. Optionally, configure this task to monitor products for live auto-tagging.

For the purposes of this task, "in stock" means "having a total inventory of greater than zero, when added up for all variants across all locations".

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tag-products-as-in-or-out-of-stock), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-products-as-in-or-out-of-stock.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
