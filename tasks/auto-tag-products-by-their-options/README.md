# Auto-tag products by their options

* [Task script](./script.liquid)

Use this task to add tags to your products, based on their options, for easy filtering. For example, use this task to tag your shirts with "Color-Blue" and "Size-XL", allowing products to be easily located by what options they offer.

## Default options

```json
{
  "product_options_to_consider__array_required": [
    "Color",
    "Size"
  ],
  "run_for_products_when_they_are_created_or_updated__boolean": true
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_for_products_when_they_are_created_or_updated__boolean %}
  shopify/products/create
  shopify/products/update
{% endif %}
```

## Documentation

(none)