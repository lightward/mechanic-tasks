# Set product templates based on product tags

* [task.json](../../tasks/set-product-templates-based-on-product-tags.json) (for import/export)
* [Task script](./script.liquid)

Use this task to automatically select a specific product template for each of your products, based on how each product is tagged. Useful for a set-it-and-forget-it setup. :)

## Default options

```json
{
  "product_tags_and_template_suffixes__keyval_required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

## Documentation

Use this task to automatically select a specific product template for each of your products, based on how each product is tagged. Useful for a set-it-and-forget-it setup. :)

To use this task, fill in "Product tags and template suffixes" with a single product tag on the left, per line, and a product template suffix on the right. For example, if you'd like products tagged "sale" to be shown with the products.sale-hero.liquid template, add an item that has "sale" on the left and "sale-hero" on the right.

If a product qualifies for several template suffixes, based on its tags and on the task configuration, this task will go with whichever tmeplate suffix match is found first.

To apply this task to your entire catalog, use the "Run task" button. Otherwise, this task will run automatically, whenever a product is created or updated.
