# Auto-tag products by age

Tags: Age, Auto-Tag, Products

This task scans every product in your store, and adds or removes the tags you configure, according to how many days have passed since the product was created. (Or published, if you prefer!)

* View in the task library: [tasks.mechanic.dev/auto-tag-new-products-by-age](https://tasks.mechanic.dev/auto-tag-new-products-by-age)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-products-by-age.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tags_and_age_threshold_in_days__keyval_number_required": {
    "new-this-week": "7",
    "new-this-month": "30"
  },
  "match_product_tags_by_minimum_age__boolean": false,
  "match_product_tags_by_maximum_age__boolean": true,
  "use_product_publish_times_instead_of_creation_times__boolean": true,
  "run_daily__boolean": null,
  "run_hourly__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task scans every product in your store, and adds or removes the tags you configure, according to how many days have passed since the product was created. (Or published, if you prefer!)

Enable "Use product publish times instead of creation times" to have this task look at when the product was published to your online storefront, instead of when the product was created. When this option is enabled, unpublished products will have any of this task's tags removed.

Configure "Product tags and age threshold in days" with product tags on the left, and the product age (in days) to qualify on the right. Combine this setting with a choice between "Match product tags by minimum age" and "Match product tags by maximum age", to achieve tagging based on either minimum or maximum ages.

For example, a product tag of "new-5" with an age threshold of "5", combined with "Match product tags by maximum age" will be added to all products that were created/published within the last 5 days. Once a product ages beyond that threshold, running this task will remove that tag.

Run this task manually to scan your store's products on demand, or configure the task to run daily or hourly.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-new-products-by-age), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-products-by-age.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
