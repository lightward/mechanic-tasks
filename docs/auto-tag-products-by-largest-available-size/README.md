# Auto-tag products by largest available size

Tags: Auto-Tag, Products, Variants

This task watches for incoming updates to inventory levels, and auto-tags the product according to the largest in-stock size. This task is specifically made to work with numeric variant options (e.g. "10", "11", "12", etc). This task can also be run manually, and can be configured to run daily.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-by-largest-available-size](https://tasks.mechanic.dev/auto-tag-products-by-largest-available-size)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-by-largest-available-size.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "largest_size_tag_prefix__required": "largest_",
  "size_option_name__required": "Size",
  "minimum_number_of_variants_in_stock_before_tagging__number_required": 2,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for incoming updates to inventory levels, and auto-tags the product according to the largest in-stock size. This task is specifically made to work with numeric variant options (e.g. "10", "11", "12", etc). This task can also be run manually, and can be configured to run daily.

Please note: when running in response to inventory updates, this task only works with up to 250 variants per product. This limit does not apply when running manually, or daily.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-by-largest-available-size), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-by-largest-available-size.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
