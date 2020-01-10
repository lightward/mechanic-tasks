# Auto-tag products when their variants change

* [Task script](./script.liquid)

Need to print price tags whenever a SKU is added? Or make a note of a new variant price? Use this task to tag products that need your attention, whenever a specific variant attribute changes.

## Default options

```json
{
  "variant_attribute_to_watch_for_changes__required": null,
  "tag_product_with_the_titles_of_each_variant_that_has_changed__boolean": null,
  "product_tag_to_add__required": null,
  "ignore_products_with_any_of_these_tags__array": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

## Documentation

Configure this task with a specific variant attribute to watch for changes. Valid attributes include "barcode", "compare_at_price", "grams", "option1", "option2", "option3", "price", "sku", and "taxable".

*Important:* After saving this task, you must click the "Run task" button before the task will start monitoring your existing products. This task run will allow the task to scan your existing products, and store information about their existing variant attributes. This is what lets the task determine whether or not a specific variant attribute has changed.

Enable the "Tag with the titles of each variant that has changed" option to have this task add a separate tag for _each_ variant that has had its specific attribute change values. The variant title will be appended to your configured tag, resulting in one or more tags per product, resembling "SKU RED" or "repriced 5 / SMALL", depending on your tag choice and variant options.

[YouTube: Watch the development video!](https://youtu.be/v0W7JZV4RBQ)