# Auto-tag products by their options

* [task.json](../../tasks/auto-tag-products-by-their-options.json) (for import/export)
* [Task script](./script.liquid)

Use this task to add tags to your products, based on their options, for easy filtering. A shirt might be tagged with "Color-Blue" and "Size-XL", for example. Optionally, choose to ignore options that only appear on out-of-stock variants, or choose to apply all tags in lowercase.

## Default options

```json
{
  "product_options_to_consider__array_required": [
    "Color",
    "Size"
  ],
  "option_name_and_value_separator__required": "-",
  "use_lowercase_tags__boolean": false,
  "ignore_variants_that_are_out_of_stock__boolean": false,
  "run_for_all_products_daily__boolean": false,
  "run_for_individual_products_when_they_are_created_or_updated__boolean": true,
  "run_for_individual_products_when_their_inventory_changes__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_for_all_products_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation

{% if options.run_for_individual_products_when_they_are_created_or_updated__boolean %}
  shopify/products/create
  shopify/products/update
{% endif %}

{% if options.run_for_individual_products_when_their_inventory_changes__boolean %}
  shopify/inventory_levels/update
{% endif %}
```

## Documentation

Use this task to add tags to your products, based on their options, for easy filtering. A shirt might be tagged with "Color-Blue" and "Size-XL", for example. Optionally, choose to ignore options that only appear on out-of-stock variants, or choose to apply all tags in lowercase.

Use this task to add tags to your products, based on their options, for easy filtering. A shirt might be tagged with "Color-Blue" and "Size-XL", for example.

Optionally, choose to ignore options that only appear on out-of-stock variants, or choose to apply all tags in lowercase.

Change the separator to change the way tags are built. Using a dash results in "Color-Blue", an underscore results in "Color_Blue", and a colon with a space yields "Color: Blue".
