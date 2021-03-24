# Set product templates based on product tags

Tags: Products, Tag

Use this task to automatically select a specific product template for each of your products, based on how each product is tagged. Useful for a set-it-and-forget-it setup. :)

* View in the task library: [usemechanic.com/task/set-product-templates-based-on-product-tags](https://usemechanic.com/task/set-product-templates-based-on-product-tags)
* Task JSON, for direct import: [task.json](../../tasks/set-product-templates-based-on-product-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tags_and_template_suffixes__keyval_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically select a specific product template for each of your products, based on how each product is tagged. Useful for a set-it-and-forget-it setup. :)

To use this task, fill in "Product tags and template suffixes" with a single product tag on the left, per line, and a product template suffix on the right. For example, if you'd like products tagged "sale" to be shown with the products.sale-hero.liquid template, add an item that has "sale" on the left and "sale-hero" on the right.

If a product qualifies for several template suffixes, based on its tags and on the task configuration, this task will go with whichever tmeplate suffix match is found first.

To apply this task to your entire catalog, use the "Run task" button. Otherwise, this task will run automatically, whenever a product is created or updated.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/set-product-templates-based-on-product-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/set-product-templates-based-on-product-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
