# Auto-sort collections by a product property

Tags: Collections, Products, Sort

This task re-sorts your collections by the product property, product metafield, or variant property that you choose. Use the "Product property" or "First variant property" options to control what attribute the task looks up. For example, using `publishedAt` in the "Product property" field will result in sorting by the date and time the product was published, while using `sku` in the "First variant property" field will result in sorting by the sku of the first variant of each product in the collection. Alternatively, enter a product metafield as "namespace.key" (e.g. `store.priority`), and the task will attempt to sort by the value of that metafield.

* View in the task library: [tasks.mechanic.dev/auto-sort-collections-by-product-properties](https://tasks.mechanic.dev/auto-sort-collections-by-product-properties)
* Task JSON, for direct import: [task.json](../../tasks/auto-sort-collections-by-product-properties.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_property": "publishedAt",
  "product_metafield": "",
  "first_variant_property": "",
  "only_sort_these_collections__array": null,
  "reverse_sort__boolean": false,
  "sort_naturally__boolean": false,
  "run_hourly__boolean": false,
  "run_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
user/collection_sort/process
user/collection_sort/complete
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task re-sorts your collections by the product property, product metafield, or variant property that you choose. Use the "Product property" or "First variant property" options to control what attribute the task looks up. For example, using `publishedAt` in the "Product property" field will result in sorting by the date and time the product was published, while using `sku` in the "First variant property" field will result in sorting by the sku of the first variant of each product in the collection. Alternatively, enter a product metafield as "namespace.key" (e.g. `store.priority`), and the task will attempt to sort by the value of that metafield.

Run this task manually to re-sort your collections on demand, or choose to run it hourly or nightly. This task will scan all collections in the shop on each run, unless you configure it to only sort certain collections using each collection's title, handle, or ID. Optionally, choose the "Reverse sort" option to have the results reversed, mainly useful for sorting by descending numeric values (e.g. `inventoryTotal`). If the property/metafield value contains numeric strings, consider using the ["Sort naturally"](https://learn.mechanic.dev/platform/liquid/filters#sort_naturally) task option.

**Important:**

- You may only choose one sorting method.
- The collections processed by this task must be configured for manual sorting, otherwise they will be ignored.
- The property you choose should be a `DateTime`, `Int`, or `String` field on the [GraphQL Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [GraphQL ProductVariant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) resource, otherwise the task will generate an error during execution. For help migrating from prior versions of this task, Shopify has documented the mappings for [REST product properties](https://shopify.dev/docs/api/admin-rest/latest/resources/product) and [REST product variant properties](https://shopify.dev/docs/api/admin-rest/latest/resources/product-variant) to GraphQL. (e.g. REST: `published_at` => GraphQL: `publishedAt`)
- Products with values for a property/metafield will always be placed before products with no values. This rule applies even when the sort order is reversed.
- If a metafield is configured that does not exist, the task will just report that no moves are needed. No error will be thrown.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-sort-collections-by-product-properties), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-sort-collections-by-product-properties.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
