# Auto-tag products when their SKUs change

* [Task script](./script.liquid)

Need to print price tags whenever a SKU is added? Use this task to tag products that need your attention, whenever their SKUs change.

## Default options

```json
{
  "product_tag_to_add__required": null,
  "tag_with_the_titles_of_each_variant_having_a_new_sku__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

## Documentation

*Important:* After saving this task, you must click the "Run task" button before the task will start monitoring your existing products. This task run will allow the task to scan your existing products, and store information about their existing SKUs. This is what lets the task determine whether or not a SKU has changed.

Enable the "Tag with the titles of each variant having a new SKU" option to have this task add a separate tag for _each_ variant that has a new SKU. The variant title will be appended to your configured tag, resulting in one or more tags per product, resembling "SKU RED" or "updated-sku 5 / SMALL", depending on your tag choice and variant options.

[YouTube: Watch the development video!](https://youtu.be/v0W7JZV4RBQ)