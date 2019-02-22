# Add Locksmith passcodes to order notes

* [Task script](./script.liquid)

Use this task to record which Locksmith passcodes your customer used, before placing their order.

## Default options

```json
{
  "note_prefix": "Locksmith passcodes used:"
}
```

## Subscriptions

```liquid
locksmith/sessions/ping
shopify/orders/create
```

## Documentation

This task requires that Mechanic webhooks be enabled for your Shopify account. Contact Locksmith support (team@uselocksmith.com) to enable this feature. :)