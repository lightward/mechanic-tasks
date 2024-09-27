# Auto-tag products by their options

Tags: Auto-Tag, Products

Use this task to add tags to your products, based on their options, for easy filtering. A shirt might be tagged with "Color-Blue" and "Size-XL", for example. Optionally, choose to ignore options that only appear on out-of-stock variants, or choose to apply all tags in lowercase.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-by-their-options](https://tasks.mechanic.dev/auto-tag-products-by-their-options)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-by-their-options.json)
* Preview task code: [script.liquid](./script.liquid)

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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

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

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to add tags to your products, based on their options, for easy filtering. A shirt might be tagged with "Color-Blue" and "Size-XL", for example. Optionally, choose to ignore options that only appear on out-of-stock variants, or choose to apply all tags in lowercase.

Change the separator to change the way tags are built. Using a dash results in "Color-Blue", an underscore results in "Color_Blue", and a colon with a space yields "Color: Blue".

This task will remove option tags that are no longer applicable, by scanning for tag prefixes using the list of product options to consider.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-by-their-options), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-by-their-options.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
