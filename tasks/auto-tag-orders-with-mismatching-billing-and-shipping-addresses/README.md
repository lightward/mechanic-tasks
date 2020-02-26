# Auto-tag orders with mismatching billing and shipping addresses

* [Task script](./script.liquid)

Useful for flagging orders for manual follow-up, for stores that see fraudulent activity in which billing and shipping address are not the same.

## Default options

```json
{
  "order_tag_to_add__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task auto-tags orders, as they're created, if their billing and shipping addresses do not match. It ignores orders that do not have a billing address, or that do not have a shipping address.