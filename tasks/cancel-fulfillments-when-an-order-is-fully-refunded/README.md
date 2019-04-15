# Cancel fulfillments when an order is fully refunded

* [Task script](./script.liquid)

This task monitors for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order. This task supports running manually, to cancel all fulfillments for refunded orders, across your store's order history.

## Default options

```json
{
  "cancel_pending_fulfillments__boolean": true,
  "cancel_open_fulfillments__boolean": false,
  "cancel_successful_fulfillments__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/refunds/create
```

## Documentation

Run this task manually to cancel fulfillments for refunded orders, across your store's order history. (To process orders older than 60 days, [enable "read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).)

This task will also monitor for new refunds. When a new refund changes an order's status to fully refunded, this task will cancel all fulfillments for that order.

Configure this task to choose which fulfillment statuses Mechanic will look for.