# Auto-tag orders with product tags

* [Task script](./script.liquid)

This task watches for new orders, and copies tags from each ordered product to the order itself.

## Default options

```json
{
  "only_copy_these_product_tags__array": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)