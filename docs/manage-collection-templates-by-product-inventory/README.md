# Manage collection templates by product inventory

Use this task to automatically switch collections over to an appropriate theme template, when every product in the collection has gone completely out of stock, and to switch them back when inventory arrives.

* View in the task library: [usemechanic.com/task/manage-collection-templates-by-product-inventory](https://usemechanic.com/task/manage-collection-templates-by-product-inventory)
* Task JSON, for direct import: [task.json](../../tasks/manage-collection-templates-by-product-inventory.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_template_suffix_when_all_products_are_out_of_stock__required": "out-of-stock",
  "default_collection_template_suffix": null,
  "run_every_time_an_inventory_level_is_updated__boolean": true,
  "run_daily__boolean": null,
  "run_hourly__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_every_time_an_inventory_level_is_updated__boolean %}shopify/inventory_levels/update{% endif %}
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically switch collections over to an appropriate theme template, when every product in the collection has gone completely out of stock, and to switch them back when inventory arrives.

This task can be run manually (using the "Run task" button), or be configured to run daily/hourly. If you encounter performance issues when running every time an inventory level is updated, disable this option.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/manage-collection-templates-by-product-inventory), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-collection-templates-by-product-inventory.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
