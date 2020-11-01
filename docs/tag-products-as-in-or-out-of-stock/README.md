# Tag products as in- or out-of-stock

* [task.json](../../tasks/tag-products-as-in-or-out-of-stock.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
