# Automatically mark new orders as ready for pickup

Tags: Fulfillment, Orders, Pick-up

Automatically mark pickup items in new orders as ready for pickup at your configured locations. Ideal for stores that always have these items in stock and want to speed up the pickup process.

* View in the task library: [tasks.mechanic.dev/automatically-mark-new-orders-as-ready-for-pickup](https://tasks.mechanic.dev/automatically-mark-new-orders-as-ready-for-pickup)
* Task JSON, for direct import: [task.json](../../tasks/automatically-mark-new-orders-as-ready-for-pickup.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "pickup_locations__array_required": [
    "Your location name here"
  ]
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Automatically mark pickup items in new orders as ready for pickup at your configured locations. Ideal for stores that always have these items in stock and want to speed up the pickup process.

Enter the exact names of your pickup locations in the task options. For orders containing both shipping and pickup, the task only marks pickup items as ready. It works with both existing shipping settings and market-driven shipping.

This task uses Shopify's [fulfillmentOrderLineItemsPreparedForPickup mutation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/automatically-mark-new-orders-as-ready-for-pickup), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-mark-new-orders-as-ready-for-pickup.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
