# Archive orders when fulfilled

* [task.json](../../tasks/archive-orders-when-fulfilled.json) (for import/export)
* [Task script](./script.liquid)

Super simple: this task monitors for order fulfillments, and automatically archives orders when they're fulfilled.

## Subscriptions

```liquid
shopify/orders/fulfilled
mechanic/user/trigger
```

## Documentation

Super simple: this task monitors for order fulfillments, and automatically archives orders when they're fulfilled.

This task runs automatically, when orders are fulfilled. To scan your store's order history and archive all _existing_ fulfilled orders, use the "Run task" button. [Enable "Read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders) to make sure Mechanic can scan your entire order history, and not just the last 60 days.
