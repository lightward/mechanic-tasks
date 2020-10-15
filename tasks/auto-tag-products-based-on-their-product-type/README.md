# Auto-tag products based on their product type

* [Task script](./script.liquid)

This task monitors new and updated products, applying the tag(s) of your choice to them based on their individual product type. Run this task manually to tag all of your products at once.

## Default options

```json
{
  "product_types_and_tags__required_keyval": null,
  "remove_product_tags_in_this_list_when_they_do_not_apply__boolean": null
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
```

## Documentation

This task monitors new and updated products, applying the tag(s) of your choice to them based on their individual product type. Run this task manually to tag all of your products at once.

Configure the "Product types and tags" option with product types on the left, and the desired comma-delimited product tags on the right. Enable the "Remove product tags in this list when they do not apply" option to have this task proactively _remove_ tags when they no longer apply. (When this option is enabled, this task will _only_ remove tags that are associated with other known product types.)