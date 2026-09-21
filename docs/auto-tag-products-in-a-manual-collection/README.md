# Auto-tag products in collections

Tags: Auto-Tag, Collections, Products

This task will monitor the configured collections for updates, and automatically tag all products that each contains. If a configured collection has at least one condition-based source (e.g. metafield contains a specific value), then choose either an hourly or daily scheduled run to pick up the dynamic membership changes which don't trigger collection updates.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-in-a-manual-collection](https://tasks.mechanic.dev/auto-tag-products-in-a-manual-collection)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-in-a-manual-collection.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collections_and_tags__keyval_required": null,
  "run_daily__boolean": null,
  "run_hourly__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/collections/update
mechanic/user/trigger
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will monitor the configured collections for updates, and automatically tag all products that each contains. If a configured collection has at least one condition-based source (e.g. metafield contains a specific value), then choose either an hourly or daily scheduled run to pick up the dynamic membership changes which don't trigger collection updates.

The task will also remove tags from any products if they are no longer in a matching collection. This task may be run manually to process all configured collections if you choose not to use a scheduled run.

**NOTE**: As of July 2026, Shopify has [merged the manual and automated collection models](https://help.shopify.com/en/manual/products/collections#collection-types), and this task will now support any configured collection as long as the task API is set to 2026-07 or newer.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-in-a-manual-collection), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-in-a-manual-collection.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
