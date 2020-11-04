# Auto-tag products based on their publishing status

* [task.json](../../tasks/auto-tag-products-based-on-their-publishing-status.json) (for import/export)
* [Task script](./script.liquid)

This task manages tagging for products, according to whether or not they're published for the sales channel of your choice. Choose a tag to use when the product is published, and/or a tag for when the product is unpublished.

## Default options

```json
{
  "tag_to_add_when_published": null,
  "tag_to_add_when_unpublished": null,
  "sales_channel_name__required": null,
  "run_every_10_minutes__boolean": null,
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_every_10_minutes__boolean %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

This task manages tagging for products, according to whether or not they're published for the sales channel of your choice. Choose a tag to use when the product is published, and/or a tag for when the product is unpublished.

Run this task manually to scan and update your entire product catalog, on demand. Otherwise, configure this task to perform this same scan on a schedule. (Note: It's not possible for a task to respond instantly to publishing or unpublishing a product. Instead, configure a run schedule.)
