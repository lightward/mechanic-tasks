# Auto-tag customers with the location of their purchase

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
```

## Documentation

This task will run for each new order that's created, applying the order location as a customer tag. Optionally, define a tag to be used for online orders (i.e. orders that have no location).

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history. **This may take some time!**

To ensure that Mechanic can access your complete history, [make sure "Read all orders" is enabled](https://help.usemechanic.com/tutorials/enabling-read_all_orders).