# Auto-tag orders by sales channel

* [task.json](../../tasks/auto-tag-orders-by-sales-channel.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
