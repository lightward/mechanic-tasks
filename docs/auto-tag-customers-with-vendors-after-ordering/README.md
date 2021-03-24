# Auto-tag customers with vendors after ordering

Tags: Auto-Tag, Customers, Vendor

This task tags customers with the name of each vendor in their order, as soon as the order is created. Useful for keeping track of which vendors a customer is interested in. :)

* View in the task library: [usemechanic.com/task/auto-tag-customers-with-vendors-after-ordering](https://usemechanic.com/task/auto-tag-customers-with-vendors-after-ordering)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-with-vendors-after-ordering.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task tags customers with the name of each vendor in their order, as soon as the order is created. Useful for keeping track of which vendors a customer is interested in. :)

This task will run for each new order that's created, applying product vendors as customer tags.

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history. **This may take some time!**

To ensure that Mechanic can access your complete history, [make sure "Read all orders" is enabled](https://help.usemechanic.com/tutorials/enabling-read_all_orders).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-with-vendors-after-ordering), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-with-vendors-after-ordering.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
