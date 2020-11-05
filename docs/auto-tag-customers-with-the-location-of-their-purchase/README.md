# Auto-tag customers with the location of their purchase

When an order is created, this task adds the location of the purchase to the customer's tags. Useful for stores with multiple Shopify-powered locations.

* View in the task library: [usemechanic.com/task/auto-tag-customers-with-the-location-of-their-purchase](https://usemechanic.com/task/auto-tag-customers-with-the-location-of-their-purchase)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-with-the-location-of-their-purchase.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_online_orders": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

When an order is created, this task adds the location of the purchase to the customer's tags. Useful for stores with multiple Shopify-powered locations.

This task will run for each new order that's created, applying the order location as a customer tag. Optionally, define a tag to be used for orders that have no physical location.

Run this task manually to have Mechanic scan your entire customer base, and each customer's order history.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-with-the-location-of-their-purchase), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-with-the-location-of-their-purchase.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
