# Auto-tag products based on their publishing status

* [task.json](../../tasks/auto-tag-products-based-on-their-publishing-status.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
