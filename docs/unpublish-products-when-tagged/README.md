# Unpublish products when tagged

* [task.json](../../tasks/unpublish-products-when-tagged.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
