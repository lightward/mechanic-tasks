# Auto-add the draft order to a new order's attributes

Tags: Draft Orders, Order Attributes

When a new order is created from a draft order, this task will automatically add the draft order ID and/or name to the custom attributes of the new order.

* View in the task library: [tasks.mechanic.dev/auto-add-the-draft-order-id-to-an-orders-attributes](https://tasks.mechanic.dev/auto-add-the-draft-order-id-to-an-orders-attributes)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-the-draft-order-id-to-an-orders-attributes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_attribute_name_for_storing_the_draft_order_id": "Draft Order ID",
  "order_attribute_name_for_storing_the_draft_order_name": "Draft Order Name"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When a new order is created from a draft order, this task will automatically add the draft order ID and/or name to the custom attributes of the new order.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-the-draft-order-id-to-an-orders-attributes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-the-draft-order-id-to-an-orders-attributes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
