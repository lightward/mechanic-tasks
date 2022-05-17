# Tag products as in- or out-of-stock, by location ID

Tags: Auto-Tag, In stock, Location, Multi-Location, Out of Stock

Use this task to easily keep an eye on which products are in stock, or out of stock, as established by individual locations. Configure tag prefixes and suffixes to arrive at product tags resembling "location-123456890-instock" or "oos-123456890". Configure this task to run hourly or daily, to keep these tags in sync.

* View in the task library: [tasks.mechanic.dev/tag-products-as-in-or-out-of-stock-by-location-id](https://tasks.mechanic.dev/tag-products-as-in-or-out-of-stock-by-location-id)
* Task JSON, for direct import: [task.json](../../tasks/tag-products-as-in-or-out-of-stock-by-location-id.json)
* Preview task code: [script.liquid](./script.liquid)

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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

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

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to easily keep an eye on which products are in stock, or out of stock, as established by individual locations. Configure tag prefixes and suffixes to arrive at product tags resembling "location-123456890-instock" or "oos-123456890". Configure this task to run hourly or daily, to keep these tags in sync.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-products-as-in-or-out-of-stock-by-location-id), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-products-as-in-or-out-of-stock-by-location-id.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
