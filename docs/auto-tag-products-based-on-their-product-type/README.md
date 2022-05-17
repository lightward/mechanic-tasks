# Auto-tag products based on their product type

Tags: Auto-Tag, Products

This task monitors new and updated products, applying the tag(s) of your choice to them based on their individual product type. Run this task manually to tag all of your products at once.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-based-on-their-product-type](https://tasks.mechanic.dev/auto-tag-products-based-on-their-product-type)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-based-on-their-product-type.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_types_and_tags__required_keyval": null,
  "remove_product_tags_in_this_list_when_they_do_not_apply__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors new and updated products, applying the tag(s) of your choice to them based on their individual product type. Run this task manually to tag all of your products at once.

Configure the "Product types and tags" option with product types on the left, and the desired comma-delimited product tags on the right. Enable the "Remove product tags in this list when they do not apply" option to have this task proactively _remove_ tags when they no longer apply. (When this option is enabled, this task will _only_ remove tags that are associated with other known product types.)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-based-on-their-product-type), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-based-on-their-product-type.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
