# Unpublish products when tagged

* [task.json](../../tasks/unpublish-products-when-tagged.json) (for import/export)
* [Task script](./script.liquid)

This task watches for certain product tags, and removes the product from the selected sales channel(s) when those tags are found.

## Default options

```json
{
  "product_tags_to_watch_for__required_array": null,
  "require_product_to_have_all_given_tags_before_unpublishing__boolean": null,
  "sales_channel_names__required_array": [
    "Online Store"
  ]
}
```

## Subscriptions

```liquid
shopify/products/update
```

## Documentation

This task watches for certain product tags, and removes the product from the selected sales channel(s) when those tags are found.
