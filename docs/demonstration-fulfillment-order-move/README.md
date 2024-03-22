# Demonstration: Fulfillment order move

Tags: Demonstration, Fulfillment, Location, SKU

This task demonstrates how to move line items from their assigned fulfillment location to another. Configure it with the SKUs that should be moved and the name of location they should be moved to. Then, when new orders are created, if any of the configured SKUs appear on a line item that is assigned to any other location besides the configured one, the task will move it.

* View in the task library: [tasks.mechanic.dev/demonstration-fulfillment-order-move](https://tasks.mechanic.dev/demonstration-fulfillment-order-move)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-fulfillment-order-move.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "move_to_location_name__required": null,
  "skus_to_move__array_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/order
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task demonstrates how to move line items from their assigned fulfillment location to another. Configure it with the SKUs that should be moved and the name of location they should be moved to. Then, when new orders are created, if any of the configured SKUs appear on a line item that is assigned to any other location besides the configured one, the task will move it.

Note: This task does not check inventory at the confiugred location before making a move, instead only verifying that the SKU is stocked there.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-fulfillment-order-move), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-fulfillment-order-move.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
