# Auto-tag customers who purchase an item on sale

Tags: Auto-Tag, Customers, Products

When a customer orders an item on sale (technically, when the order contains a product variant that includes a "compare at" price), this task automatically adds a tag to their account. Useful for keeping track of customers who take advantage of sale pricing!

* View in the task library: [usemechanic.com/task/auto-tag-customers-who-purchase-an-item-on-sale](https://usemechanic.com/task/auto-tag-customers-who-purchase-an-item-on-sale)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-who-purchase-an-item-on-sale.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_add__required": "discount-shopper"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

When a customer orders an item on sale (technically, when the order contains a product variant that includes a "compare at" price), this task automatically adds a tag to their account. Useful for keeping track of customers who take advantage of sale pricing!

This task will run for each new order that's created, tagging customers who purchase a product that has a "compare at" price.

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history. **This may take some time!** To ensure that Mechanic can access your complete history, [make sure "Read all orders" is enabled](https://help.usemechanic.com/tutorials/enabling-read_all_orders).

**Please note**: This task will only tag customers who've purchased a product that _currently_ has a "compare at" price. Historical information about "compare at" pricing is not available, and so this task cannot make tagging decisions based on historical pricing.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-who-purchase-an-item-on-sale), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-who-purchase-an-item-on-sale.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
