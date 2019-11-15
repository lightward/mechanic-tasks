# Auto-delete customers that are created without orders

* [Task script](./script.liquid)

Useful for stores that are subjected to bot abuse, this task watches for newly-created customers, and deletes any that don't come with an associated order. Optionally, choose to ignore any customers that are created with a certain tag – helpful if you create customers yourself, via the Shopify admin.

## Default options

```json
{
  "ignore_customers_having_this_tag": null
}
```

## Subscriptions

```liquid
shopify/customers/create
```

## Documentation

Useful for stores that are subjected to bot abuse, this task watches for newly-created customers, and deletes any that don't come with an associated order. Optionally, choose to ignore any customers that are created with a certain tag – helpful if you create customers yourself, via the Shopify admin.