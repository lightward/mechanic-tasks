# Automatically cancel orders with certain risk indicators

* [task.json](../../tasks/automatically-cancel-orders-with-certain-risk-indicators.json) (for import/export)
* [Task script](./script.liquid)

This task auto-cancels incoming orders when it finds all of a certain set of risk indicator messages. Risk messages must match exactly, so double-check your configuration!

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

## Subscriptions

```liquid
shopify/orders/updated
```

## Documentation

This task auto-cancels incoming orders when it finds all of a certain set of risk indicator messages. Risk messages must match exactly, so double-check your configuration!
