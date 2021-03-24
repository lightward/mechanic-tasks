# Auto-tag products based on their publishing status

Tags: Auto-Tag, Products, Publish

This task manages tagging for products, according to whether or not they're published for the sales channel of your choice. Choose a tag to use when the product is published, and/or a tag for when the product is unpublished.

* View in the task library: [usemechanic.com/task/auto-tag-products-based-on-their-publishing-status](https://usemechanic.com/task/auto-tag-products-based-on-their-publishing-status)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-based-on-their-publishing-status.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_add_when_published": null,
  "tag_to_add_when_unpublished": null,
  "sales_channel_name__required": null,
  "run_every_10_minutes__boolean": null,
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_every_10_minutes__boolean %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task manages tagging for products, according to whether or not they're published for the sales channel of your choice. Choose a tag to use when the product is published, and/or a tag for when the product is unpublished.

Run this task manually to scan and update your entire product catalog, on demand. Otherwise, configure this task to perform this same scan on a schedule. (Note: It's not possible for a task to respond instantly to publishing or unpublishing a product. Instead, configure a run schedule.)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-products-based-on-their-publishing-status), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-based-on-their-publishing-status.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
