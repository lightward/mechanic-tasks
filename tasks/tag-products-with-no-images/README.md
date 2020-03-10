# Tag products with no images

* [Task script](./script.liquid)

Running manually or on a schedule, this task scans all products in your store, and adds a tag to any products that have no images. Optionally, choose to have this task remove that tag from any products that are found to have an image.

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

Running manually or on a schedule, this task scans all products in your store, and adds a tag to any products that have no images. Optionally, choose to have this task remove that tag from any products that are found to have an image.