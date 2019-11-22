# Auto-tag new orders using the customer's tags

* [Task script](./script.liquid)

Use this task to apply the same categorizations you use for your customers. Useful for pre-approving customers, and then quickly sorting your orders based on that pre-approval. Optionally, configure this task to only copy certain tags from customers to their orders.

## Default options

```json
{
  "only_copy_these_tags__array": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)