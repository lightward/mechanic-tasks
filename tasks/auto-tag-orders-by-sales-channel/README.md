# Auto-tag orders by sales channel

* [Task script](./script.liquid)

Use this task to tag orders as they come in, based on which sales channel created them. Run this task manually to backfill tags for customers based on their historical orders.

## Default options

```json
{
  "sales_channel_names_and_tags__keyval_required": {
    "Online Store": "online-store",
    "Buy Button": "buy-button"
  }
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

Use this task to tag orders as they come in, based on which sales channel created them. Run this task manually to backfill tags for customers based on their historical orders.