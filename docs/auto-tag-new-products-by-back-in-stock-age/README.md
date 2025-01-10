# Auto-tag products by "back in stock" age

Tags: Auto-Tag, In stock, Products, Watch

This task monitors changes to inventory level, records the time at which a product's total inventory passes your configured threshold, and then maintains a set of tags indicating how recently the product returned to "back in stock" status.

* View in the task library: [tasks.mechanic.dev/auto-tag-new-products-by-back-in-stock-age](https://tasks.mechanic.dev/auto-tag-new-products-by-back-in-stock-age)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-products-by-back-in-stock-age.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "back_in_stock_inventory_level__number_required": "1",
  "product_tags_and_maximum_age_in_days__keyval_number_required": {
    "new-1": "1",
    "new-5": "5"
  },
  "include_new_products__boolean": false,
  "run_daily__boolean": true,
  "run_hourly__boolean": false,
  "force_usage_of_creation_date_on_manual_runs__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.include_new_products__boolean %}
  shopify/products/create
{% endif %}
shopify/inventory_levels/update
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors changes to inventory level, records the time at which a product's total inventory passes your configured threshold, and then maintains a set of tags indicating how recently the product returned to "back in stock" status.

This task operates in two phases.

Phase one runs in response to inventory level changes. When a change brings a product's total inventory to at or above your configured threshold, the task will record the "back in stock" time for that product.

Phase two occurs when you run this task manually, or when it is run daily or hourly. In this phase, the task scans every product in your shop and updates tags in bulk according to the task's configuration and according to the recorded "back in stock" time for each product.

Configure "Product tags and maximum age in days" with product tags on the left, and the maximum product age to consider on the right. For example, a product tag of "new-5" with a maximum age in days of "5" will be maintained on all products that have a "back in stock: time within the last 5 days. Once a product ages beyond that threshold, this task will remove that tag during the next "phase two" run.

**Note:** when this task first encounters a product on either an inventory level change or a bulk scan, the task will record the current time as the "first seen time". No tags will be added to a product until a "back in stock" time is recorded that is *newer* than the "first seen time". Optionally, choosing to "Include new products" means that their "first seen time" will instead be set as their product creation date, and they will be tagged as soon as they have inventory that meets the configured threshold.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-new-products-by-back-in-stock-age), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-products-by-back-in-stock-age.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
