# Auto-sort collections by inventory levels

Tags: Collections, Inventory, Sort

This task re-sorts your collections, beginning with the sort order of your choice (alphabetically, best selling first, etc), and then by total inventory in descending order. Products whose inventory is not tracked (i.e. limitless inventory) will be moved to the top and out-of-stock products (inventory <= 0) will be moved to the bottom. Optionally, choose to sort by the sellable online quantity (i.e. locations enabled for online order fulfillment) instead of the total inventory for a product across all locations.

* View in the task library: [tasks.mechanic.dev/auto-sort-collections-by-inventory-levels](https://tasks.mechanic.dev/auto-sort-collections-by-inventory-levels)
* Task JSON, for direct import: [task.json](../../tasks/auto-sort-collections-by-inventory-levels.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "base_sort_order__required": "ALPHA_ASC",
  "collection_handles_or_ids_to_include__array": [],
  "collection_handles_or_ids_to_exclude__array": [],
  "force_manual_sorting_on_collections__boolean": false,
  "use_sellable_online_quantity_instead_of_total_inventory__boolean": false,
  "run_hourly__boolean": false,
  "run_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task re-sorts your collections, beginning with the sort order of your choice (alphabetically, best selling first, etc), and then by total inventory in descending order. Products whose inventory is not tracked (i.e. limitless inventory) will be moved to the top and out-of-stock products (inventory <= 0) will be moved to the bottom. Optionally, choose to sort by the sellable online quantity (i.e. locations enabled for online order fulfillment) instead of the total inventory for a product across all locations.

Run this task manually to re-sort your collections on demand. It may be configured to run hourly or nightly as well.

By default, this task will run against **ALL** of your collections. Alternatively, you may configure this task to only _include_ certain collections using each collection's handle, or its ID. [Learn how to find the collection IDs.](https://learn.mechanic.dev/techniques/finding-a-resource-id)

Conversely, you may configure this task to _exclude_ certain collections using each collection's handle, or its ID, in which case it will run against all collections except the ones in this list. [Note: if there are any collections entered into the inclusion list, then the exclusion list will be ignored.]

The combination of inclusion and exclusion options _can_ allow multiple copies of this task to run (to use different base sorting for instance), provided they are configured properly.

This task will skip any collections it encounters if the collection sorting is not already set to manual. Check the "Force manual sorting on collections" option to have the task update those collections to the manual sorting required by this task.

You may use any of these options for the base sort order:

* MANUAL
* ALPHA_ASC
* ALPHA_DESC
* BEST_SELLING
* CREATED
* CREATED_DESC
* PRICE_ASC
* PRICE_DESC

**Note**: To function correctly, the "Perform action runs in sequence" option should stay enabled in the task's advanced settings.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-sort-collections-by-inventory-levels), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-sort-collections-by-inventory-levels.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
