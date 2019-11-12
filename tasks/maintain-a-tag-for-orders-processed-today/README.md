# Maintain a tag for orders processed today

* [Task script](./script.liquid)

This task auto-tags today's new orders, as they're processed, and auto-untags them when the date changes. Optionally, choose to untag outside of a rolling 24-hour window, instead of untagging yesterday's orders at midnight.

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

This task auto-tags today's new orders, as they're processed, and auto-untags them when the date changes. Optionally, choose to untag outside of a rolling 24-hour window, instead of untagging yesterday's orders at midnight.

[YouTube: See the development video for this task!](https://youtu.be/1BzhNUZ8Efo)