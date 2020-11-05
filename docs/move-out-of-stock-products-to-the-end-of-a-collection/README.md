# Move out-of-stock products to the end of a collection

This task re-sorts your collections, beginning with the sort order of your choice (alphabetically, best selling first, etc), and then moving all out-of-stock products to the very end of the collection.

* View in the task library: [usemechanic.com/task/move-out-of-stock-products-to-the-end-of-a-collection](https://usemechanic.com/task/move-out-of-stock-products-to-the-end-of-a-collection)
* Task JSON, for direct import: [task.json](../../tasks/move-out-of-stock-products-to-the-end-of-a-collection.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "base_sort_order__required": "ALPHA_DESC",
  "collection_titles_or_ids__array_required": null,
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
user/reorder_collection/stage_2
user/reorder_collection/stage_3
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task re-sorts your collections, beginning with the sort order of your choice (alphabetically, best selling first, etc), and then moving all out-of-stock products to the very end of the collection.

This task re-sorts your chosen collections, beginning with the sort order of your choice, and then moving all out-of-stock products to the very end of the collection.

Run this task manually to re-sort your collections on demand. Optionally, configure this task to run hourly or nightly as well.

Configure this task for certain collections using each collection's title, or its ID. [Learn how to find the collection IDs.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

The collections used with this task must be configured for manual sorting. [Learn how to change the sort order of your collections.](https://help.shopify.com/en/manual/products/collections/collection-layout#change-the-sort-order-for-the-products-in-a-collection)

You may use any of these options for the base sort order:

* MANUAL
* BEST_SELLING
* ALPHA_ASC
* ALPHA_DESC
* PRICE_DESC
* PRICE_ASC
* CREATED_DESC
* CREATED

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/move-out-of-stock-products-to-the-end-of-a-collection), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/move-out-of-stock-products-to-the-end-of-a-collection.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
