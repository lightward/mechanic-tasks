# Auto-tag orders with their tracking numbers

Tags: Auto-Tag, Orders, Shipping, Tracking

Tracking numbers aren't generally searchable within Shopify. Use this task to fix that, by copying all fulfillment tracking numbers over to the order itself, as (searchable!) order tags.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-with-their-tracking-numbers](https://tasks.mechanic.dev/auto-tag-orders-with-their-tracking-numbers)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-their-tracking-numbers.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Tracking numbers aren't generally searchable within Shopify. Use this task to fix that, by copying all fulfillment tracking numbers over to the order itself, as (searchable!) order tags.

This task runs when fulfillments are created or updated, adding the fulfillment's tracking number(s) to the order's tags. Run this task manually to scan and tag all of your store's existing orders.

Please note: any special characters in the tracking number may be ignored by Shopify.

[YouTube: Watch the development video!](https://youtu.be/qNsdDaPYl24)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-with-their-tracking-numbers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-their-tracking-numbers.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
