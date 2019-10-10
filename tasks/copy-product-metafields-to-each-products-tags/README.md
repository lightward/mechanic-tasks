# Copy product metafields to each product's tags

* [Task script](./script.liquid)

This task exists to fill the gap between Shopify's admin product search, and product metafields. Use this task to copy metafield values to product tags, allowing you to filter products by tags based on those metafields.

## Default options

```json
{
  "metafield_namespace__required": null,
  "metafield_key__required": null,
  "monitor_new_products__boolean": null,
  "test_mode__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.monitor_new_products__boolean %}
  shopify/products/create
{%endif%}
```

## Documentation

(none)