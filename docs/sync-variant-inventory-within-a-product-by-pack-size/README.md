# Sync variant inventory within a product by pack size

* [task.json](../../tasks/sync-variant-inventory-within-a-product-by-pack-size.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "product_inventory_tag_prefix__required": "inventory:",
  "variant_pack_size_option_name": "Pack size",
  "variant_pack_size_metafield_namespace": "",
  "variant_pack_size_metafield_key": "",
  "run_when_orders_are_paid_instead_of_when_they_are_created__boolean": false
}
```

## Subscriptions

```liquid
{% if options.run_when_orders_are_paid_instead_of_when_they_are_created__boolean %}shopify/orders/paid{% else %}shopify/orders/create{% endif %}
shopify/products/create
shopify/products/update
```

## Documentation

null
