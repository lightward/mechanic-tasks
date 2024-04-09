# Automatically cancel orders with certain risk indicators

Tags: Cancel, Orders, Risk

This task auto-cancels incoming orders when it finds all of a certain set of risk assessment facts. Risk assessment facts must match exactly, so double-check your configuration! Optionally, this task can also auto-tag the order, email the customer, restock the inventory, and/or refund payment.

* View in the task library: [tasks.mechanic.dev/automatically-cancel-orders-with-certain-risk-indicators](https://tasks.mechanic.dev/automatically-cancel-orders-with-certain-risk-indicators)
* Task JSON, for direct import: [task.json](../../tasks/automatically-cancel-orders-with-certain-risk-indicators.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_risk_assessment_facts__array_required": null,
  "cancellation_reason_to_set": null,
  "ignore_unpaid_orders__boolean": null,
  "refund_payment_for_cancelled_orders__boolean": null,
  "restock_inventory_for_cancelled_orders__boolean": null,
  "email_customer_when_cancelling__boolean": null,
  "staff_note_for_timeline": null,
  "add_this_order_tag_when_cancelling": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task auto-cancels incoming orders when it finds all of a certain set of risk assessment facts. Risk assessment facts must match exactly, so double-check your configuration! Optionally, this task can also auto-tag the order, email the customer, restock the inventory, and/or refund payment.

Valid cancellation reasons to set:

* customer: The customer wanted to cancel the order.
* declined: Payment was declined.
* fraud: The order was fraudulent.
* inventory: There was insufficient inventory.
* staff: Staff made an error.
* other: The order was canceled for an unlisted reason.

__NOTE:__ This task will not cancel orders that have been partially or fully fulfilled

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/automatically-cancel-orders-with-certain-risk-indicators), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-cancel-orders-with-certain-risk-indicators.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
