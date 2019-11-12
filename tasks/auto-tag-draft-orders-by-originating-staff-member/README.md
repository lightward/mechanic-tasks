# Auto-tag draft orders by originating staff member

* [Task script](./script.liquid)

Use this task to keep track of who created what draft order. This task watches for new draft orders, and tags each one with the name of the store staff member who created it. This task can also be run manually, to scan and tag all draft orders already in your store.

## Default options

```json
{
  "tag_prefix": null
}
```

## Subscriptions

```liquid
shopify/draft_orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

This task watches for new draft orders, that are created by store staff members, auto-tagging each new draft order with the name of the user who created it. Run this task manually to scan and tag all existing draft orders in your store.

[YouTube: Watch the development video!](https://youtu.be/6E-oEGeBumE)