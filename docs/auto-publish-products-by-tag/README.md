# Auto publish products by tag

Tags: Products, Publish, Sales Channel, Unpublish

This task runs when products are created or updated and manages publishing to the configured sales channels, according to whether or not the product has a certain tag. Products with the tag will be published on ALL of the configured sales channels; and those without the product tag will be unpublished from them.

* View in the task library: [tasks.mechanic.dev/auto-publish-products-by-tag](https://tasks.mechanic.dev/auto-publish-products-by-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-publish-products-by-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names__array_required": [],
  "product_tag__required": ""
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

This task runs when products are created or updated and manages publishing to the configured sales channels, according to whether or not the product has a certain tag. Products with the tag will be published on ALL of the configured sales channels; and those without the product tag will be unpublished from them.

Run this task manually to scan your entire product catalog, publishing and unpublishing products by the presence or absence of the configured product tag.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-publish-products-by-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-publish-products-by-tag.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
