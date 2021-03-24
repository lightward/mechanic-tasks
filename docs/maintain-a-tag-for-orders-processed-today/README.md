# Maintain a tag for orders processed today

Tags: Auto-Tag, Orders

This task auto-tags today's new orders, as they're processed, and auto-untags them when the date changes. Optionally, choose to untag outside of a rolling 24-hour window, instead of untagging yesterday's orders at midnight.

* View in the task library: [usemechanic.com/task/maintain-a-tag-for-orders-processed-today](https://usemechanic.com/task/maintain-a-tag-for-orders-processed-today)
* Task JSON, for direct import: [task.json](../../tasks/maintain-a-tag-for-orders-processed-today.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "use_rolling_24_hour_window__boolean": null,
  "order_tag__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create

{% if options.use_rolling_24_hour_window__boolean %}
  mechanic/scheduler/10min
{% else %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task auto-tags today's new orders, as they're processed, and auto-untags them when the date changes. Optionally, choose to untag outside of a rolling 24-hour window, instead of untagging yesterday's orders at midnight.

[YouTube: See the development video for this task!](https://youtu.be/1BzhNUZ8Efo)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/maintain-a-tag-for-orders-processed-today), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-a-tag-for-orders-processed-today.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
