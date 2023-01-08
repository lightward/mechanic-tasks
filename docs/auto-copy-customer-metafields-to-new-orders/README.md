# Auto-copy customer metafields to new orders

Tags: Customers, Metafields, Order Attributes, Orders

When new orders are created, this task will check to see if the customer has any of the configured metafields, and if so it will copy the metafield values to the paired order attributes.

* View in the task library: [tasks.mechanic.dev/auto-copy-customer-metafields-to-new-orders](https://tasks.mechanic.dev/auto-copy-customer-metafields-to-new-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-copy-customer-metafields-to-new-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_metafields_and_order_attributes__keyval_required": {}
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When new orders are created, this task will check to see if the customer has any of the configured metafields, and if so it will copy the metafield values to the paired order attributes.

Configure this task by adding customer metafields on the left, in the form of __namespace.key__, and the order attribute names on the right.

_Example configuration:_ "custom.group": "Group"

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-copy-customer-metafields-to-new-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-copy-customer-metafields-to-new-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
