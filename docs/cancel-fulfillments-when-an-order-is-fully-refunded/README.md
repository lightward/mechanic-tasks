# Cancel fulfillments when an order is fully refunded

Tags: Cancel, Fulfillment, Orders, Refunds

This task monitors for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order. This task supports running manually, to cancel all fulfillments for refunded orders, across your store's order history.

* View in the task library: [tasks.mechanic.dev/cancel-fulfillments-when-an-order-is-fully-refunded](https://tasks.mechanic.dev/cancel-fulfillments-when-an-order-is-fully-refunded)
* Task JSON, for direct import: [task.json](../../tasks/cancel-fulfillments-when-an-order-is-fully-refunded.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "cancel_pending_fulfillments__boolean": true,
  "cancel_open_fulfillments__boolean": false,
  "cancel_successful_fulfillments__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/refunds/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order. This task supports running manually, to cancel all fulfillments for refunded orders, across your store's order history.

Run this task manually to cancel fulfillments for refunded orders, across your store's order history. (To process orders older than 60 days, [enable "read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).)

This task will also monitor for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order.

Configure this task to choose which fulfillment statuses Mechanic will look for.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/cancel-fulfillments-when-an-order-is-fully-refunded), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/cancel-fulfillments-when-an-order-is-fully-refunded.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
