# Auto-pay orders having a certain tag

* [Task script](./script.liquid)

Use this task to quickly designate certain orders to be automatically marked as paid. Runs for orders as they're created and updated, and can also be run manually, to scan all orders in your store at once.

## Default options

```json
{
  "required_order_tag__required": null,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
mechanic/user/trigger
```

## Documentation

When running manually, use test mode first to ensure that you'll receive the results you expect. :)