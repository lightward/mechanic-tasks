# Find duplicate SKUs

Tags: Products, SKU

This task scans your entire product list, looking for duplicate SKUs using exact matching, and returning the list of duplicate SKUs (and the associated product variant IDs) if any are found.

* View in the task library: [usemechanic.com/task/find-duplicate-skus](https://usemechanic.com/task/find-duplicate-skus)
* Task JSON, for direct import: [task.json](../../tasks/find-duplicate-skus.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "exclude_products_that_do_not_track_inventory__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans your entire product list, looking for duplicate SKUs using exact matching, and returning the list of duplicate SKUs (and the associated product variant IDs) if any are found.

Note: SKUs that are identical apart from being uppercase/lowercase, for example, do not count as exact matches, and would not be considered duplicates by this task.

This report will only scan a store's first 125,000 product variants.

"Exclude products that do not track inventory" will exclude any product whose inventory is not tracked in Shopify.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/find-duplicate-skus), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/find-duplicate-skus.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
