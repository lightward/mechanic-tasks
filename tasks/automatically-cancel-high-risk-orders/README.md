# Automatically cancel high-risk orders

* [Task script](./script.liquid)

This task immediately cancels orders as soon as Shopify (or another risk-analysis app) determines it to be high risk. Optionally, this task can also auto-tag the order, email the customer, and attempt to void or refund payment.

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

## Subscriptions

```liquid
shopify/orders/updated
```

## Documentation

Valid cancellation reasons:

* customer: The customer canceled the order.
* fraud: The order was fraudulent.
* inventory: Items in the order were not in inventory.
* declined: The payment was declined.
* other: A reason not in this list.