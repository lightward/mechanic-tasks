# Auto-tag products by largest available size

* [task.json](../../tasks/auto-tag-products-by-largest-available-size.json) (for import/export)
* [Task script](./script.liquid)

This task watches for incoming updates to inventory levels, and auto-tags the product according to the largest in-stock size. This task is specifically made to work with numeric variant options (e.g. "10", "11", "12", etc). This task can also be run manually, and can be configured to run daily.

## Default options

```json
{
  "largest_size_tag_prefix__required": "largest_",
  "size_option_name__required": "Size",
  "minimum_number_of_variants_in_stock_before_tagging__number_required": 2,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

This task watches for incoming updates to inventory levels, and auto-tags the product according to the largest in-stock size. This task is specifically made to work with numeric variant options (e.g. "10", "11", "12", etc). This task can also be run manually, and can be configured to run daily.

Please note: when running in response to inventory updates, this task only works with up to 250 variants per product. This limit does not apply when running manually, or daily.
