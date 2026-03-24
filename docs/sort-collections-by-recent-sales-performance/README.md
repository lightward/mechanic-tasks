# Sort collections by recent sales performance

Tags: (not tagged!)

This task will run daily to sort the selected collections, moving products with sales in the lookback period to the top in descending order by the sort metric (e.g. "Net sales"). All other products in each collection will be left in the previously sorted order. Choose the length of the sales lookback period in days and the metric you wish to use for sorting.

* View in the task library: [tasks.mechanic.dev/sort-collections-by-recent-sales-performance](https://tasks.mechanic.dev/sort-collections-by-recent-sales-performance)
* Task JSON, for direct import: [task.json](../../tasks/sort-collections-by-recent-sales-performance.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collections_to_sort__picker_collection_array_required": null,
  "lookback_period_in_days__range_min7_max90_required": 7,
  "sort_metric__choice_o1_net_items_sold_o2_net_sales_o3_total_sales_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will run daily to sort the selected collections, moving products with sales in the lookback period to the top in descending order by the sort metric (e.g. "Net sales"). All other products in each collection will be left in the previously sorted order. Choose the length of the sales lookback period in days and the metric you wish to use for sorting.

**Notes:**
- This task will skip any collections that are not configured for manual sorting.
- The sales lookback period is capped at 90 days to avoid potential Shopify Analytics query limits.
- The metrics offered for configuration directly match the ones available in Shopify Analytics.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sort-collections-by-recent-sales-performance), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sort-collections-by-recent-sales-performance.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
