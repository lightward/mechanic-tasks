# Set product or variant metafields values in bulk

Tags: Bulk, Metafields, Products, Variants

Use this task to set a **default value** on a single metafield across all of your products or variants, excluding any where this metafield already has a value set.

* View in the task library: [tasks.mechanic.dev/set-product-or-variant-metafields-in-bulk](https://tasks.mechanic.dev/set-product-or-variant-metafields-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/set-product-or-variant-metafields-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace_and_key__required": null,
  "metafield_type__required": null,
  "metafield_default_value__required": null,
  "set_product_metafields__boolean": false,
  "set_variant_metafields__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to set a **default value** on a single metafield across all of your products or variants, excluding any where this metafield already has a value set.

Configure it with a metafield namespace and key (separated by a period, e.g. "my_fields.color"), the metafield type, and the default metafield value. Then choose either to *Set product metafields* or *Set variant metafields*.

The following Shopify metafield types are supported by this task: *boolean*, *color*, *date*, *date_time*, *number_decimal*, *number_integer*, *single_line_text_field*, *url*. More information on Shopify metafield types and the values supported by each can be found [here](https://shopify.dev/apps/metafields/types#supported-types).

**Note:** This task will not validate the configured default metafield value against the configured metafield type when the task is saved. Instead, if an invalid metafield value is configured, then a Shopify GraphQL error will appear in the task run log (specifically the *mechanic/shopify/bulk_operation*
 child event), which will indicate the specific issue with the value.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/set-product-or-variant-metafields-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/set-product-or-variant-metafields-in-bulk.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
