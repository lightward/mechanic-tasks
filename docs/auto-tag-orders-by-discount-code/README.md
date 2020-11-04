# Auto-tag orders by discount code

* [task.json](../../tasks/auto-tag-orders-by-discount-code.json) (for import/export)
* [Task script](./script.liquid)

This task watches for newly-created orders, and copies any discount codes present to the order's tags.

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task watches for newly-created orders, and copies any discount codes present to the order's tags.
