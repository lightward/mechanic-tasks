# Auto-tag orders that are ready to ship

Tags: Auto-Tag, Orders, Shipping

Use this task to tag orders, as they are created, if every single line item is related to a variant that's in stock.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-that-are-ready-to-ship](https://tasks.mechanic.dev/auto-tag-orders-that-are-ready-to-ship)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-are-ready-to-ship.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "ignore_line_items_not_fulfilled_manually__boolean": null,
  "order_tag_to_add__required": "ready-to-ship",
  "test_mode__boolean": null,
  "run_every_10_minutes__boolean": null,
  "run_hourly__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger

{% if options.run_every_10_minutes__boolean %}
  mechanic/scheduler/10min
{% elsif options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag orders, as they are created, if every single line item is related to a variant that's in stock.

Enable "Ignore line items not fulfilled manually" to skip line items that you do not fulfill yourself from within Shopify. (This means that orders that consist _entirely_ of these line items will never be tagged by this task.)

Check either of the scheduled run options to have the task scan all unfulfilled, untagged orders on each run to see if they qualify to be tagged.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-that-are-ready-to-ship), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-are-ready-to-ship.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
