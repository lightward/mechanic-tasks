# Untag orders when paid

* [task.json](../../tasks/untag-orders-when-paid.json) (for import/export)
* [Task script](./script.liquid)

This task automatically removes specific order tag(s) when orders are paid.

## Default options

```json
{
  "order_tags_to_remove__array": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

This task automatically removes specific order tag(s) when orders are paid.
