# Tag orders that have at least x of a certain product

Tags: Auto-Tag, Orders

Use this task to monitor for orders that meet a certain quantity threshold, per line item or totaled up, optionally only looking at certain SKUs. Optionally, send yourself an email notification when such an order comes in.

* View in the task library: [tasks.mechanic.dev/tag-orders-that-have-at-least-x-of-a-certain-product](https://tasks.mechanic.dev/tag-orders-that-have-at-least-x-of-a-certain-product)
* Task JSON, for direct import: [task.json](../../tasks/tag-orders-that-have-at-least-x-of-a-certain-product.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_quantity_threshold__number_required": null,
  "evaluate_threshold_per_line_item__boolean": false,
  "only_monitor_these_skus__array": null,
  "order_tag_to_apply": null,
  "email_notification_recipient__email": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to monitor for orders that meet a certain quantity threshold, per line item or totaled up, optionally only looking at certain SKUs. Optionally, send yourself an email notification when such an order comes in.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-orders-that-have-at-least-x-of-a-certain-product), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-orders-that-have-at-least-x-of-a-certain-product.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
