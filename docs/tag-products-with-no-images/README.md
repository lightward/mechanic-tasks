# Tag products with no images

Tags: Images, Products, Tag

Running manually or on a schedule, this task scans all products in your store, and adds a tag to any products that have no images. Optionally, choose to have this task remove that tag from any products that are found to have an image.

* View in the task library: [usemechanic.com/task/tag-products-with-no-images](https://usemechanic.com/task/tag-products-with-no-images)
* Task JSON, for direct import: [task.json](../../tasks/tag-products-with-no-images.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tag_to_add__required": null,
  "remove_product_tag_if_images_are_found__boolean": null,
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

mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Running manually or on a schedule, this task scans all products in your store, and adds a tag to any products that have no images. Optionally, choose to have this task remove that tag from any products that are found to have an image.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tag-products-with-no-images), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-products-with-no-images.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
