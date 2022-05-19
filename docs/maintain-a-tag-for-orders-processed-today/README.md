# Maintain a tag for orders processed today

Tags: Auto-Tag, Orders

This task auto-tags today's new orders, as they're processed, and auto-untags them when the date changes. Optionally, choose to untag outside of a rolling 24-hour window, instead of untagging yesterday's orders at midnight.

* View in the task library: [tasks.mechanic.dev/maintain-a-tag-for-orders-processed-today](https://tasks.mechanic.dev/maintain-a-tag-for-orders-processed-today)
* Task JSON, for direct import: [task.json](../../tasks/maintain-a-tag-for-orders-processed-today.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "use_rolling_24_hour_window__boolean": null,
  "order_tag__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create

{% if options.use_rolling_24_hour_window__boolean %}
  mechanic/scheduler/10min
{% else %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task auto-tags today's new orders, as they're processed, and auto-untags them when the date changes. Optionally, choose to untag outside of a rolling 24-hour window, instead of untagging yesterday's orders at midnight.

[YouTube: See the development video for this task!](https://youtu.be/1BzhNUZ8Efo)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/maintain-a-tag-for-orders-processed-today), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-a-tag-for-orders-processed-today.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
