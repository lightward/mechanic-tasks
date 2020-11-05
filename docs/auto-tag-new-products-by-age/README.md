# Auto-tag new products by age

This task scans every product in your store, and adds or removes the tags you configure, according to how many days have passed since the product was created. (Or published, if you prefer!)

* View in the task library: [usemechanic.com/task/auto-tag-new-products-by-age](https://usemechanic.com/task/auto-tag-new-products-by-age)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-products-by-age.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "use_product_publish_times_instead_of_creation_times__boolean": true,
  "product_tags_and_maximum_age_in_days__keyval_number_required": {
    "new-1": "1",
    "new-5": "5",
    "new-9999": "9999"
  },
  "run_daily__boolean": null,
  "run_hourly__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans every product in your store, and adds or removes the tags you configure, according to how many days have passed since the product was created. (Or published, if you prefer!)

This task scans every product in your store, and applies the tags you configure, according to the product's age.

Enable "Use product publish times instead of creation times" to have this task look at when the product was published to your online storefront, instead of when the product was created. When this option is enabled, unpublished products will have any of this task's tags removed.

Configure "Product tags and maximum age in days" with product tags on the left, and the maximum product age to consider on the right. For example, a product tag of "new-5" with a maximum age in days of "5" will be added to all products that were created/published within the last 5 days. Once a product ages beyond that threshold, running this task will remove that tag.

Run this task manually to scan your store's products on demand, or configure the task to run daily/hourly.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-products-by-age), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-products-by-age.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
