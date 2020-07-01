# Auto-tag customers when their order is tagged

* [Task script](./script.liquid)

This task watches for order tags, and adds a corresponding tag to the customer whenever a known order tag is found.

## Default options

```json
{
  "order_tags_and_customer_tags__keyval_required": {
    "order-tag-to-watch-for": "corresponding-customer-tag-to-apply"
  }
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

## Documentation

Configure this task with order tags on the left, and customer tags on the right. When an order is created or updated with one or more of the tags on the left, the corresponding customer tags will be applied to the customer. Simple as that. :)