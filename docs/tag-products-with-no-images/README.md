# Tag products with no images

* [task.json](../../tasks/tag-products-with-no-images.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "product_tag_to_add__required": null,
  "remove_product_tag_if_images_are_found__boolean": null,
  "run_every_10_minutes": null,
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_every_10_minutes %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

## Documentation

null
