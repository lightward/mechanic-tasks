# Manage collection templates by product inventory

* [Task script](./script.liquid)

Use this task to automatically switch collections over to an appropriate theme template, when every product in the collection has gone completely out of stock, and to switch them back when inventory arrives.

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

## Subscriptions

```liquid
{% if options.run_every_time_an_inventory_level_is_updated__boolean %}shopify/inventory_levels/update{% endif %}
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
mechanic/shopify/bulk_operation
```

## Documentation

Use this task to automatically switch collections over to an appropriate theme template, when every product in the collection has gone completely out of stock, and to switch them back when inventory arrives.

This task can be run manually (using the "Run task" button), or be configured to run daily/hourly. If you encounter performance issues when running every time an inventory level is updated, disable this option.