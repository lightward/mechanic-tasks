# Auto-tag customers by sales channel

* [task.json](../../tasks/auto-tag-customers-by-sales-channel.json) (for import/export)
* [Task script](./script.liquid)

Use this task to tag customers, as their orders come in, based on which sales channel they used for their purchase. Run this task manually to backfill tags for customers based on their historical orders. Use test mode to see what this task _would_ do, if test mode wasn't enabled. :)

## Default options

```json
{
  "sales_channel_names_and_tags__keyval_required": {
    "Online Store": "online-customer",
    "Buy Button": "buy-button-customer"
  },
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

Use this task to tag customers, as their orders come in, based on which sales channel they used for their purchase. Run this task manually to backfill tags for customers based on their historical orders. Use test mode to see what this task _would_ do, if test mode wasn't enabled. :)

[YouTube: Watch the development video!](https://youtu.be/TN13-eX1ops)
