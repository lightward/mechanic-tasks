# Auto-tag orders using product tags

* [Task script](./script.liquid)

Use this task to tag incoming orders with all the product tags in the order. Optionally, specify a specific list of tags to be copied, and/or a certain tag prefix to watch for. Can be run manually, to scan and tag historical orders.

## Default options

```json
{
  "only_copy_these_tags__array": null,
  "only_copy_tags_having_this_prefix": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

Use this task to tag incoming orders with all the product tags in the order. Optionally, specify a specific list of tags to be copied, and/or a certain tag prefix to watch for.

Run this task manually to scan and tag all orders, in bulk.