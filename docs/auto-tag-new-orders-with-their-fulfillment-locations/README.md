# Auto-tag new orders with their fulfillment locations

* [task.json](../../tasks/auto-tag-new-orders-with-their-fulfillment-locations.json) (for import/export)
* [Task script](./script.liquid)

Monitoring for brand-new orders, this task tags each order with the fulfillment locations that Shopify automatically assigns at the moment of order creation. (Note: It's not currently possible to adjust tags when assigned fulfillment locations change.)

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Monitoring for brand-new orders, this task tags each order with the fulfillment locations that Shopify automatically assigns at the moment of order creation. (Note: It's not currently possible to adjust tags when assigned fulfillment locations change.)

Important: This task requires Shopify API version 2020-01 or later.
