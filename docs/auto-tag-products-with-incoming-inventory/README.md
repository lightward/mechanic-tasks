# Auto-tag products with incoming inventory

Tags: Auto-Tag, Bulk, Inventory, Products, Transfer

Keep track of which products in your shop have incoming inventory with this task! Running when inventory levels are updated, this task will tag the product with the tag of your choice if _any_ of that product's variants at _any_ of your locations has an incoming transfer. Conversely, the tag will be removed when there are no pending transfers.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-with-incoming-inventory](https://tasks.mechanic.dev/auto-tag-products-with-incoming-inventory)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-with-incoming-inventory.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tag_to_apply__required": null,
  "run_on_a_schedule__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
{% if options.run_on_a_schedule__boolean %}
  mechanic/scheduler/daily+2.hours
{% endif %}
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Keep track of which products in your shop have incoming inventory with this task! Running when inventory levels are updated, this task will tag the product with the tag of your choice if _any_ of that product's variants at _any_ of your locations has an incoming transfer. Conversely, the tag will be removed when there are no pending transfers.

The task may also be run manually, and optionally on a schedule, in which case it will scan your _entire_ product catalog for incoming transfers, and tag products accordingly.

Notes:
- Transfers initiated from suppliers (i.e external locations) do __not__ trigger inventory level updates _until_ they are received. Use the "Run on a schedule" option to have the task identify and tag these incoming transfers.
- Because the scheduled run option uses a [bulk operation query](https://learn.mechanic.dev/core/shopify/read/bulk-operations), by default it has been scheduled to run at 2 AM local shop time to avoid potential conflicts with other scheduled bulk operations. Adjust this [time](https://learn.mechanic.dev/core/tasks/subscriptions#offsets) and [frequency](https://learn.mechanic.dev/platform/events/topics#scheduler) as needed in the task subscriptions.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-with-incoming-inventory), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-with-incoming-inventory.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
