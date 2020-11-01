# Auto-tag orders by originating staff member

* [task.json](../../tasks/auto-tag-orders-by-originating-staff-member.json) (for import/export)
* [Task script](./script.liquid)

Use this task to keep track of who created what order. This task watches for new orders, and tags each one with the name of the store staff member who created it (if that's how the order was created). This task can also be run manually, to scan and tag all orders already in your store.

## Default options

```json
{
  "include_pos_orders__boolean": null,
  "tag_prefix": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

Use this task to keep track of who created what order. This task watches for new orders, and tags each one with the name of the store staff member who created it (if that's how the order was created). This task can also be run manually, to scan and tag all orders already in your store.

This task watches for new orders, that are created by store staff members, auto-tagging each new order with the name of the user who created it. Run this task manually to scan and tag all existing orders in your store.

[YouTube: Watch the development video!](https://youtu.be/6E-oEGeBumE)
