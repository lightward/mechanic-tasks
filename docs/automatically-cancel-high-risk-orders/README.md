# Automatically cancel high-risk orders

Tags: Cancel, Orders, Risk

This task immediately cancels orders as soon as Shopify (or another risk-analysis app) determines it to be high risk. Optionally, this task can also auto-tag the order, email the customer, and attempt to void or refund payment.

* View in the task library: [usemechanic.com/task/automatically-cancel-high-risk-orders](https://usemechanic.com/task/automatically-cancel-high-risk-orders)
* Task JSON, for direct import: [task.json](../../tasks/automatically-cancel-high-risk-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "cancellation_reason": "customer",
  "ignore_unpaid_orders__boolean": null,
  "attempt_to_void_or_refund_payment_for_cancelled_orders__boolean": false,
  "email_customer_when_cancelling__boolean": false,
  "add_this_order_tag_when_cancelling": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task immediately cancels orders as soon as Shopify (or another risk-analysis app) determines it to be high risk. Optionally, this task can also auto-tag the order, email the customer, and attempt to void or refund payment.

Valid cancellation reasons:

* customer: The customer canceled the order.
* fraud: The order was fraudulent.
* inventory: Items in the order were not in inventory.
* declined: The payment was declined.
* other: A reason not in this list.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/automatically-cancel-high-risk-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-cancel-high-risk-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
