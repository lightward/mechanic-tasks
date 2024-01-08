# Auto-sort collections by product properties

Tags: Collections, Products, Sort

This task re-sorts your collections by any product property that you choose. Use the "Product property lookups" option to control what attribute the task "looks up". For example, using "published_at" will result in sorting by the date and time the product was published. Add more than one lookup to dive more deeply into product data: using the lookups "metafields", "store", "priority", and "value" will result in a collection sorted by the `store.priority` metafield value on each product.

* View in the task library: [tasks.mechanic.dev/auto-sort-collections-by-product-properties](https://tasks.mechanic.dev/auto-sort-collections-by-product-properties)
* Task JSON, for direct import: [task.json](../../tasks/auto-sort-collections-by-product-properties.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_property_lookups__array_required": [
    "published_at"
  ],
  "only_sort_these_collections__array": null,
  "reverse_sort__boolean": false,
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

This task re-sorts your collections by any product property that you choose. Use the "Product property lookups" option to control what attribute the task "looks up". For example, using "published_at" will result in sorting by the date and time the product was published. Add more than one lookup to dive more deeply into product data: using the lookups "metafields", "store", "priority", and "value" will result in a collection sorted by the `store.priority` metafield value on each product.

Refer to [Shopify's API documentation](https://help.shopify.com/en/api/reference/products/product) to find the product property you're looking for.

Run this task manually to re-sort your collections on demand, or choose to run it hourly or nightly.

This task will scan all collections in the shop on each run, unless you configure it to only sort certain collections using each collection's title or ID. The collections processed by this task must be configured for manual sorting, otherwise they will be ignored. [Learn how to change the sort order of your collections.](https://help.shopify.com/en/manual/products/collections/collection-layout#change-the-sort-order-for-the-products-in-a-collection)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-sort-collections-by-product-properties), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-sort-collections-by-product-properties.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
