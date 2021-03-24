# Auto-sort collections by product properties

Tags: Sort, Collections, Products

This task re-sorts your collections by any product property that you choose. A property lookup can be something simple, like "published_at", or more complicated: use multiple property lookups, like "metafields", "store", and "priority", to sort collections by product metafield values.

* View in the task library: [usemechanic.com/task/auto-sort-collections-by-product-properties](https://usemechanic.com/task/auto-sort-collections-by-product-properties)
* Task JSON, for direct import: [task.json](../../tasks/auto-sort-collections-by-product-properties.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_property_lookups__array_required": [
    "published_at"
  ],
  "reverse_sort__boolean": false,
  "only_sort_these_collections__array": null,
  "run_hourly__boolean": false,
  "run_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task re-sorts your collections by any product property that you choose. A property lookup can be something simple, like "published_at", or more complicated: use multiple property lookups, like "metafields", "store", and "priority", to sort collections by product metafield values.

This task re-sorts your collections by any product property that you choose. Use the "Product property lookups" option to control what attribute the task "looks up". For example, using "published_at" will result in sorting by the date and time the product was published. Add more than one lookup to dive more deeply into product data: using the lookups "metafields", "store", and "priority" will result in a collection sorted by the `store.priority` metafield on each product.

Refer to [Shopify's API documentation](https://help.shopify.com/en/api/reference/products/product) to find the product property you're looking for

Run this task manually to re-sort your collections on demand. Optionally, configure this task to run hourly or nightly as well.

Configure this task to only look at certain collections using each collection's title, or its ID. [Learn how to find the collection IDs.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

The collections used with this task must be configured for manual sorting. [Learn how to change the sort order of your collections.](https://help.shopify.com/en/manual/products/collections/collection-layout#change-the-sort-order-for-the-products-in-a-collection)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-sort-collections-by-product-properties), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-sort-collections-by-product-properties.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
