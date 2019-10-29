# Add all products to a certain sales channel

* [Task script](./script.liquid)

Does exactly as it says: this task will publish all products to the sales channel(s) of your choice, on demand. Optionally, filter products by a search query, or choose to have this task run every ten minutes, hourly, or daily.

## Default options

```json
{
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "only_publish_products_matching_this_query": null,
  "test_mode__boolean": true,
  "run_every_10_minutes__boolean": null,
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_every_10_minutes__boolean  %}mechanic/scheduler/10min{% endif %}
{% if options.run_hourly__boolean  %}mechanic/scheduler/hourly{% endif %}
{% if options.run_daily__boolean  %}mechanic/scheduler/daily{% endif %}
```

## Documentation

(none)