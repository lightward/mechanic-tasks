# Partially auto-capture payments as orders are fulfilled

Tags: Fulfillment, Orders, Payment

Running when an order is updated, this task captures payment in proportion to the order value that has been fulfilled. For example, for an order with a subtotal of $10 and a total of $15 with shipping/taxes/discounts, this task will capture $7.50 when $5 of the order's value has been fulfilled.

* View in the task library: [usemechanic.com/task/partially-auto-capture-payments-as-orders-are-fulfilled](https://usemechanic.com/task/partially-auto-capture-payments-as-orders-are-fulfilled)
* Task JSON, for direct import: [task.json](../../tasks/partially-auto-capture-payments-as-orders-are-fulfilled.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Running when an order is updated, this task captures payment in proportion to the order value that has been fulfilled. For example, for an order with a subtotal of $10 and a total of $15 with shipping/taxes/discounts, this task will capture $7.50 when $5 of the order's value has been fulfilled.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/partially-auto-capture-payments-as-orders-are-fulfilled), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/partially-auto-capture-payments-as-orders-are-fulfilled.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
