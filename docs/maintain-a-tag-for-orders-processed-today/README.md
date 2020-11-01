# Maintain a tag for orders processed today

* [task.json](../../tasks/maintain-a-tag-for-orders-processed-today.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "use_rolling_24_hour_window__boolean": null,
  "order_tag__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create

{% if options.use_rolling_24_hour_window__boolean %}
  mechanic/scheduler/10min
{% else %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

null
