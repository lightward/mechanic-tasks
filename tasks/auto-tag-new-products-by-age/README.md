# Auto-tag new products by age

* [Task script](./script.liquid)

This task scans every product in your store, and adds or removes the tags you configure, according to how many days have passed since the product was created. (Or published, if you prefer!)

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

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
```

## Documentation

This task scans every product in your store, and applies the tags you configure, according to the product's age.

Enable "Use product publish times instead of creation times" to have this task look at when the product was published to your online storefront, instead of when the product was created. When this option is enabled, unpublished products will have any of this task's tags removed.

Configure "Product tags and maximum age in days" with product tags on the left, and the maximum product age to consider on the right. For example, a product tag of "new-5" with a maximum age in days of "5" will be added to all products that were created/published within the last 5 days. Once a product ages beyond that threshold, running this task will remove that tag.

Run this task manually to scan your store's products on demand, or configure the task to run daily/hourly.