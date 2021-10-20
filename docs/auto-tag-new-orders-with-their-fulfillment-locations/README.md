# Auto-tag new orders with their fulfillment locations

Tags: Auto-Tag, Fulfillment, Location, Orders

Monitoring for brand-new orders, this task tags each order with the fulfillment locations that Shopify automatically assigns at the moment of order creation. (Note: It's not currently possible to adjust tags when assigned fulfillment locations change.)

* View in the task library: [usemechanic.com/task/auto-tag-new-orders-with-their-fulfillment-locations](https://usemechanic.com/task/auto-tag-new-orders-with-their-fulfillment-locations)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-with-their-fulfillment-locations.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Monitoring for brand-new orders, this task tags each order with the fulfillment locations that Shopify automatically assigns at the moment of order creation. (Note: It's not currently possible to adjust tags when assigned fulfillment locations change.)

Important: This task requires Shopify API version 2020-01 or later.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-orders-with-their-fulfillment-locations), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-with-their-fulfillment-locations.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
