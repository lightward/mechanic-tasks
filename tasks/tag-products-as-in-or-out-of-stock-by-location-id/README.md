# Tag products as in- or out-of-stock, by location ID

* [Task script](./script.liquid)

Use this task to easily keep an eye on which products are in stock, or out of stock, as established by individual locations. Configure tag prefixes and suffixes to arrive at product tags resembling "location-123456890-instock" or "oos-123456890". Configure this task to run hourly or daily, to keep these tags in sync.

## Default options

```json
{
  "tag_prefix_when_in_stock": "location-",
  "tag_suffix_when_in_stock": "-instock",
  "tag_prefix_when_out_of_stock": "location-",
  "tag_suffix_when_out_of_stock": "-outofstock",
  "run_daily__boolean": false,
  "run_hourly__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% endif %}
```

## Documentation

(none)