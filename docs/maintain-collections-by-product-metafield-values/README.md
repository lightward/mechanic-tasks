# Maintain collections by product metafield values

Tags: Bulk, Collections, Metafields, Products

This task will scan your entire catalog to maintain products in collections based on metafield values. Configure the task with a metafield namespace and key (separated by a period, e.g. "custom.color"), and a list of metafield string values paried with collection IDs. If the value of a product's metafield matches any of the configured ones, then the product will be added to that collection. Conversely, products in a configured collection which do not match a metafield value will be removed.

* View in the task library: [tasks.mechanic.dev/maintain-collections-by-product-metafield-values](https://tasks.mechanic.dev/maintain-collections-by-product-metafield-values)
* Task JSON, for direct import: [task.json](../../tasks/maintain-collections-by-product-metafield-values.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace_and_key__required": null,
  "metafield_values_and_collection_ids__keyval_number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/shopify/bulk_operation
mechanic/scheduler/daily  
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will scan your entire catalog to maintain products in collections based on metafield values. Configure the task with a metafield namespace and key (separated by a period, e.g. "custom.color"), and a list of metafield string values paried with collection IDs. If the value of a product's metafield matches any of the configured ones, then the product will be added to that collection. Conversely, products in a configured collection which do not match a metafield value will be removed.

**Note:** This task only checks the values of metafields that are of type *single_line_text_field* or *list.single_line_text_field*. For list type metafields, the product will qualify for collection membership if *any* of the list values matches a metafield value. More information on Shopify metafield types can be found [here](https://shopify.dev/apps/metafields/types#supported-types).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/maintain-collections-by-product-metafield-values), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-collections-by-product-metafield-values.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
