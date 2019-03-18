# Auto-copy notes from customers to their orders

* [Task script](./script.liquid)

Save time jumping between screens, by making sure that the order record has everything you need. Useful for shops that keep important fulfillment information in the customer notes. This task can be run manually to back-fill notes for open orders.

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

This task runs automatically, whenever a new order is created.

Run this task manually to scan all open orders, copying the customer note to the order note. (To include open orders older than 60 days, [enable "read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).)