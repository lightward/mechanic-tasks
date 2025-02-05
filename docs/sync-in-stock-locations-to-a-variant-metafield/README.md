# Sync in stock locations to a variant metafield

Tags: (not tagged!)

This task will maintain a variant list metafield of in stock location names. Running on a schedule, it will check recently updated variants to see which are in stock at each location. Variants with positive "available" inventory at a location, or are configured for overselling, are considered to be in stock, as are variants that are sold from a location but not tracked.

* View in the task library: [tasks.mechanic.dev/sync-in-stock-locations-to-a-variant-metafield](https://tasks.mechanic.dev/sync-in-stock-locations-to-a-variant-metafield)
* Task JSON, for direct import: [task.json](../../tasks/sync-in-stock-locations-to-a-variant-metafield.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "variant_metafield__required": "custom.in_stock_locations",
  "include_location_names__array": null,
  "exclude_location_names__array": null,
  "run_every_10_minutes__boolean": false,
  "run_hourly__boolean": true,
  "run_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_every_10_minutes__boolean %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will maintain a variant list metafield of in stock location names. Running on a schedule, it will check recently updated variants to see which are in stock at each location. Variants with positive "available" inventory at a location, or are configured for overselling, are considered to be in stock, as are variants that are sold from a location but not tracked.

Optionally, you may choose to have this task only check specific locations using the "Include location names" option, or to ignore specific locations using the "Exclude location names" option. Exclusions will only apply if the inclusions field is empty.

Run the task manually to scan all variants (up to 25K) in the shop for initial setup.

**Important:** if you wish the configured variant metafield to be used as a search filter on your website using [Shopify Search & Discovery](https://help.shopify.com/en/manual/online-store/search-and-discovery), then you must set up a [custom metafield definition](https://help.shopify.com/en/manual/custom-data/metafields/metafield-definitions/creating-custom-metafield-definitions) for it *before* running this task. Otherwise, you will not be able to create the metafield definition with a "list.single_line_text_field" type.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-in-stock-locations-to-a-variant-metafield), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-in-stock-locations-to-a-variant-metafield.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
