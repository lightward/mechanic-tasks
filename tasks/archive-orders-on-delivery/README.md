# Archive orders on delivery

* [Task script](./script.liquid)

Don't keep your customers waiting! Stay on top of orders that have yet to be delivered, by auto-archiving every order once every item has reached the customer.

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

## Documentation

This task monitors fulfillment events. Every time a fulfillment event occurs, every fulfillment in the related order is scanned - once each fulfillment reaches the "delivered" status, this task archives the order.