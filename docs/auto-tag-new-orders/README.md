# Auto-tag new orders

* [task.json](../../tasks/auto-tag-new-orders.json) (for import/export)
* [Task script](./script.liquid)

Immediately upon order creation, add one or more tags to the order. Simple as that. :)

## Default options

```json
{
  "order_tags_to_add__array_required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Immediately upon order creation, add one or more tags to the order. Simple as that. :)
