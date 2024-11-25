# Auto-tag products when their variants change

Tags: Auto-Tag, Products, Variants, Watch

Need to print price tags whenever a SKU is added? Or make a note of a new variant price? Use this task to tag products that need your attention, whenever a specific variant attribute changes.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-when-their-skus-change](https://tasks.mechanic.dev/auto-tag-products-when-their-skus-change)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-when-their-skus-change.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "variant_attribute_to_watch_for_changes__required": null,
  "tag_product_with_the_titles_of_each_variant_that_has_changed__boolean": null,
  "product_tag_to_add__required": null,
  "ignore_products_with_any_of_these_tags__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Need to print price tags whenever a SKU is added? Or make a note of a new variant price? Use this task to tag products that need your attention, whenever a specific variant attribute changes.

Configure this task with a specific variant attribute to watch for changes. Valid attributes include "barcode", "compareAtPrice", "price", "sku", and "taxable".

*Important:* After saving this task, you must click the "Run task" button before the task will start monitoring your existing products. This task run will allow the task to scan your existing products, and store information about their existing variant attributes. This is what lets the task determine whether or not a specific variant attribute has changed.

Enable the "Tag product with the titles of each variant that has changed" option to have this task add a separate tag for _each_ variant that has had its specific attribute change values. The variant title will be appended to your configured tag, resulting in one or more tags per product, resembling "SKU RED" or "repriced 5 / SMALL", depending on your tag choice and variant options.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-when-their-skus-change), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-when-their-skus-change.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
