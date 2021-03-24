# Auto-copy notes from customers to their orders

Tags: Customer Notes, Order Note, Customers

Save time jumping between screens, by making sure that the order record has everything you need. Useful for shops that keep important fulfillment information in the customer notes. This task can be run manually to back-fill notes for open orders.

* View in the task library: [usemechanic.com/task/auto-copy-notes-from-customers-to-their-orders](https://usemechanic.com/task/auto-copy-notes-from-customers-to-their-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-copy-notes-from-customers-to-their-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Save time jumping between screens, by making sure that the order record has everything you need. Useful for shops that keep important fulfillment information in the customer notes. This task can be run manually to back-fill notes for open orders.

This task runs automatically, whenever a new order is created.

Run this task manually to scan all open orders, copying the customer note to the order note. (To include open orders older than 60 days, [enable "read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-copy-notes-from-customers-to-their-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-copy-notes-from-customers-to-their-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
