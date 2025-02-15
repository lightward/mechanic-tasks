# Auto-tag customers with the location of their purchase

Tags: Auto-Tag, Customers, Location, Orders

When an order is created, this task adds the location name of the purchase to the customer's tags. Useful for stores with multiple Shopify-powered POS locations.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-with-the-location-of-their-purchase](https://tasks.mechanic.dev/auto-tag-customers-with-the-location-of-their-purchase)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-with-the-location-of-their-purchase.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_online_orders": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When an order is created, this task adds the location name of the purchase to the customer's tags. Useful for stores with multiple Shopify-powered POS locations.

This task will run for each new order that's created, applying the POS location name as a customer tag. Optionally, define a tag to be used for online orders.

Run this task manually to have Mechanic scan each customer with an order history.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-with-the-location-of-their-purchase), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-with-the-location-of-their-purchase.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
