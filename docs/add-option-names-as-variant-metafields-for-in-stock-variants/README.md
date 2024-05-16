# Add Option Name as a Variant Metafield for In Stock Variants

Tags: In stock, Metafields, Online Store 2.0, Variants

This task populates variant metafields with your desired variant options for use by Online Store 2.0 filtering, taking into account whether or not a variant has inventory available for sale online. It runs when inventory levels are updated, and may also be run manually to scan all variants in your shop.

* View in the task library: [tasks.mechanic.dev/add-option-names-as-variant-metafields-for-in-stock-variants](https://tasks.mechanic.dev/add-option-names-as-variant-metafields-for-in-stock-variants)
* Task JSON, for direct import: [task.json](../../tasks/add-option-names-as-variant-metafields-for-in-stock-variants.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace__required": null,
  "option_names_and_metafield_keys__keyval_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task populates variant metafields with your desired variant options for use by Online Store 2.0 filtering, taking into account whether or not a variant has inventory available for sale online. It runs when inventory levels are updated, and may also be run manually to scan all variants in your shop.

Configure it with a single metafield namespace (e.g. "my_fields") and one or more variant options (e.g. "Size") paired with their respective metafield key (e.g. "size_in_stock").

__Important:__ To use OS 2.0 collection and search filtering, you must configure variant metafield definitions for each metafield key configured in this task. Read Shopify's documenation on [adding metafield definitions](https://help.shopify.com/en/manual/custom-data/metafields/metafield-definitions) for more info.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/add-option-names-as-variant-metafields-for-in-stock-variants), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/add-option-names-as-variant-metafields-for-in-stock-variants.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
