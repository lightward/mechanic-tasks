# Auto-tag products by largest available size

* [task.json](../../tasks/auto-tag-products-by-largest-available-size.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
