# Partially auto-capture payments as orders are fulfilled

* [task.json](../../tasks/partially-auto-capture-payments-as-orders-are-fulfilled.json) (for import/export)
* [Task script](./script.liquid)

Running when an order is updated, this task captures payment in proportion to the order value that has been fulfilled. For example, for an order with a subtotal of $10 and a total of $15 with shipping/taxes/discounts, this task will capture $7.50 when $5 of the order's value has been fulfilled.

## Subscriptions

```liquid
shopify/orders/updated
```

## Documentation

Running when an order is updated, this task captures payment in proportion to the order value that has been fulfilled. For example, for an order with a subtotal of $10 and a total of $15 with shipping/taxes/discounts, this task will capture $7.50 when $5 of the order's value has been fulfilled.
