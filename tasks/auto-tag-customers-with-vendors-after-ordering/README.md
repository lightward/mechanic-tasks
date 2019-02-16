# Auto-tag customers with vendors after ordering

* [Task script](./script.liquid)

This task tags customers with the name of each vendor in their order, as soon as the order is created. Useful for keeping track of which vendors a customer is interested in. :)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

This task will run for each new order that's created, applying product vendors as customer tags.

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history. **This may take some time!**

To ensure that Mechanic can access your complete history, [make sure "Read all orders" is enabled](https://help.usemechanic.com/tutorials/enabling-read_all_orders).