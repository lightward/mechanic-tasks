# Auto-tag orders with shipping label price adjustments

Tags: Auto-Tag, Orders, Shipping

This task will run daily to scan order timeline events from the past week to see if any orders have new shipping provider charges for labels. Qualifying orders will be tagged with the tag of your choice.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-with-shipping-label-price-adjustments](https://tasks.mechanic.dev/auto-tag-orders-with-shipping-label-price-adjustments)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-shipping-label-price-adjustments.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_add__required": "shipping-label-price-adjustment"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will run daily to scan order timeline events from the past week to see if any orders have new shipping provider charges for labels. Qualifying orders will be tagged with the tag of your choice.

Run this task manually to scan the last 25K related order events. **Note:** You may need to enable [read all orders](https://learn.mechanic.dev/platform/shopify/read-all-orders) to successfully tag qualifying orders older than 60 days.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-with-shipping-label-price-adjustments), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-shipping-label-price-adjustments.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
