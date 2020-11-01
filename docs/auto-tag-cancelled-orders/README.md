# Auto-tag cancelled orders

* [task.json](../../tasks/auto-tag-cancelled-orders.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "tags_to_add__array": [
    "cancelled"
  ],
  "tags_to_remove__array": null
}
```

## Subscriptions

```liquid
shopify/orders/updated
mechanic/user/trigger
```

## Documentation

null
