# Automatically cancel orders with certain risk indicators

This task auto-cancels incoming orders when it finds all of a certain set of risk indicator messages. Risk messages must match exactly, so double-check your configuration!

* View in the task library: [usemechanic.com/task/automatically-cancel-orders-with-certain-risk-indicators](https://usemechanic.com/task/automatically-cancel-orders-with-certain-risk-indicators)
* Task JSON, for direct import: [task.json](../../tasks/automatically-cancel-orders-with-certain-risk-indicators.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_risk_indicator_messages__array_required": [],
  "cancellation_reason": null,
  "ignore_unpaid_orders__boolean": null,
  "attempt_to_void_or_refund_payment_for_cancelled_orders__boolean": null,
  "email_customer_when_cancelling__boolean": null,
  "add_this_order_tag_when_cancelling": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task auto-cancels incoming orders when it finds all of a certain set of risk indicator messages. Risk messages must match exactly, so double-check your configuration!

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/automatically-cancel-orders-with-certain-risk-indicators), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-cancel-orders-with-certain-risk-indicators.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
