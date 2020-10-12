# Tag products as in- or out-of-stock

* [Task script](./script.liquid)

This task scans your products, in bulk, and tags them according to whether or not they're in stock. Optionally, configure this task to monitor products for live auto-tagging.

## Default options

```json
{
  "in_stock_tag__required": "in-stock",
  "out_of_stock_tag__required": "out-of-stock",
  "monitor_products_for_inventory_updates__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.monitor_products_for_inventory_updates__boolean %}
  shopify/products/create
  shopify/products/update
{% endif %}
```

## Documentation

This task scans your products, in bulk, and tags them according to whether or not they're in stock. Optionally, configure this task to monitor products for live auto-tagging.

For the purposes of this task, "in stock" means "having a total inventory of greater than zero, when added up for all variants across all locations".