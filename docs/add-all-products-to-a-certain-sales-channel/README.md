# Add all products to a certain sales channel

Tags: Products, Sales Channel, Bulk

Does exactly as it says: this task will publish all products to the sales channel(s) of your choice, on demand. Optionally, filter products by a search query, or choose to have this task run every ten minutes, hourly, or daily.

* View in the task library: [usemechanic.com/task/add-all-products-to-a-certain-sales-channel](https://usemechanic.com/task/add-all-products-to-a-certain-sales-channel)
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
  "run_every_10_minutes__boolean": null,
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_every_10_minutes__boolean  %}mechanic/scheduler/10min{% endif %}
{% if options.run_hourly__boolean  %}mechanic/scheduler/hourly{% endif %}
{% if options.run_daily__boolean  %}mechanic/scheduler/daily{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Does exactly as it says: this task will publish all products to the sales channel(s) of your choice, on demand. Optionally, filter products by a search query, or choose to have this task run every ten minutes, hourly, or daily.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/add-all-products-to-a-certain-sales-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/add-all-products-to-a-certain-sales-channel.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
