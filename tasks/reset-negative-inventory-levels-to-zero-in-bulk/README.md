# Reset negative inventory levels to zero in bulk

* [Task script](./script.liquid)

Super simple. Scans all inventory levels in your store, on demand, and brings the negative ones back up to zero. Optionally, configure this task to run nightly.

## Default options

```json
{
  "run_daily_at_midnight__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_daily_at_midnight__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

## Documentation

(none)