# Auto-tag customers with the location of their purchase

* [task.json](../../tasks/auto-tag-customers-with-the-location-of-their-purchase.json) (for import/export)
* [Task script](./script.liquid)

When an order is created, this task adds the location of the purchase to the customer's tags. Useful for stores with multiple Shopify-powered locations.

## Default options

```json
{
  "tag_for_online_orders": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

When an order is created, this task adds the location of the purchase to the customer's tags. Useful for stores with multiple Shopify-powered locations.

This task will run for each new order that's created, applying the order location as a customer tag. Optionally, define a tag to be used for orders that have no physical location.

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history.
