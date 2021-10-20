# Delete the oldest x products from a specific collection

Tags: Collections, Delete, Products

Either triggered manually, or configured to run daily, this task will look for the oldest products in the collection of your choice, and delete as many of them as you wish.

* View in the task library: [usemechanic.com/task/delete-the-oldest-x-products-from-a-specific-collection](https://usemechanic.com/task/delete-the-oldest-x-products-from-a-specific-collection)
* Task JSON, for direct import: [task.json](../../tasks/delete-the-oldest-x-products-from-a-specific-collection.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_id__number_required": null,
  "number_of_products_to_delete_at_once__number_required": null,
  "test_mode__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Either triggered manually, or configured to run daily, this task will look for the oldest products in the collection of your choice, and delete as many of them as you wish.

This task requires a collection ID - [learn how to find yours](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/delete-the-oldest-x-products-from-a-specific-collection), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-the-oldest-x-products-from-a-specific-collection.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
