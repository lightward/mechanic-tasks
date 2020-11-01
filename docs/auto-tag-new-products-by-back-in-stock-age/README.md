# Auto-tag new products by "back in stock" age

* [task.json](../../tasks/auto-tag-new-products-by-back-in-stock-age.json) (for import/export)
* [Task script](./script.liquid)

This task monitors changes to inventory level, records the time at which a product's total inventory passes your configured threshold, and then maintains a set of tags indicating how recently the product returned to "back in stock" status.

## Default options

```json
{
  "back_in_stock_inventory_level__number_required": "50",
  "product_tags_and_maximum_age_in_days__keyval_number_required": {
    "new-1": "1",
    "new-5": "5",
    "new-9999": "9999"
  },
  "run_daily__boolean": false,
  "run_hourly__boolean": false
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update

mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
```

## Documentation

This task monitors changes to inventory level, records the time at which a product's total inventory passes your configured threshold, and then maintains a set of tags indicating how recently the product returned to "back in stock" status.

This task operates in two phases.

Phase one runs in response to inventory level changes. When a change brings a product's total inventory to at or above your configured threshold, a [metafield](https://help.shopify.com/en/manual/products/metafields) will be added to your product, indicating when it returned to "back in stock" status. (Note: when this task encounters a product for the first time, and the product is _already_ considered "back in stock", the task will record the current time.)

Phase two occurs when you run this task manually, or when it is run daily or hourly. In this phase, the task scans every product in your Shopify account, and updates tags in bulk, according to the task's configuration and according to the recorded "back in stock" time for each product.

Configure "Product tags and maximum age in days" with product tags on the left, and the maximum product age to consider on the right. For example, a product tag of "new-5" with a maximum age in days of "5" will be added to all products that were created/published within the last 5 days. Once a product ages beyond that threshold, this task will remove that tag during the next "phase two" run.
