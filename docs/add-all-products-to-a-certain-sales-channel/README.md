# Add all products to a certain sales channel

Tags: Bulk, Products, Publish, Sales Channel

Does exactly as it says: this task will publish all active products to the sales channel(s) of your choice, on demand. Optionally, filter products by a search query, or choose to have this task run hourly or daily.

* View in the task library: [tasks.mechanic.dev/add-all-products-to-a-certain-sales-channel](https://tasks.mechanic.dev/add-all-products-to-a-certain-sales-channel)
* Task JSON, for direct import: [task.json](../../tasks/add-all-products-to-a-certain-sales-channel.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "only_publish_products_matching_this_query": null,
  "test_mode__boolean": true,
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Does exactly as it says: this task will publish all active products to the sales channel(s) of your choice, on demand. Optionally, filter products by a search query, or choose to have this task run hourly or daily.

Note: this task comes with a "test mode", which is enabled by default. Run the task at least once in this mode to make sure it would publish the products you expect, and then disbale the test mode.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/add-all-products-to-a-certain-sales-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/add-all-products-to-a-certain-sales-channel.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
