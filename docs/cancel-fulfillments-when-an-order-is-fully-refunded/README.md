# Cancel fulfillments when an order is fully refunded

Tags: Cancel, Fulfillment, Orders, Refunds

This task monitors for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order. This task supports running manually, to cancel all fulfillments for refunded orders, across your store's order history.

* View in the task library: [usemechanic.com/task/cancel-fulfillments-when-an-order-is-fully-refunded](https://usemechanic.com/task/cancel-fulfillments-when-an-order-is-fully-refunded)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/refunds/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order. This task supports running manually, to cancel all fulfillments for refunded orders, across your store's order history.

Run this task manually to cancel fulfillments for refunded orders, across your store's order history. (To process orders older than 60 days, [enable "read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).)

This task will also monitor for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order.

Configure this task to choose which fulfillment statuses Mechanic will look for.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/cancel-fulfillments-when-an-order-is-fully-refunded), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/cancel-fulfillments-when-an-order-is-fully-refunded.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
