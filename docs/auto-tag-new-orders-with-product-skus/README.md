# Auto-tag new orders with product SKUs

* [task.json](../../tasks/auto-tag-new-orders-with-product-skus.json) (for import/export)
* [Task script](./script.liquid)

This task watches for new orders, and tags each order with all line item SKUs found in that order.

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task watches for new orders, and tags each order with all line item SKUs found in that order.
