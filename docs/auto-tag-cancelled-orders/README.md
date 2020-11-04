# Auto-tag cancelled orders

* [task.json](../../tasks/auto-tag-cancelled-orders.json) (for import/export)
* [Task script](./script.liquid)

This task watches for order cancellations, and adds or removes tags according to your preference. Run this task manually to update tags for existing cancelled orders.

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

This task watches for order cancellations, and adds or removes tags according to your preference. Run this task manually to update tags for existing cancelled orders.
