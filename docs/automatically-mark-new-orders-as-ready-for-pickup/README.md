# Automatically mark new orders as ready for pickup

Tags: Fulfillment, Orders, Pick-up

This task makes it easy for you to automatically mark new orders as 'Ready For Pickup' as soon as they come in. Ideal for stores that always have products in stock and want to speed up the pickup process.

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

This task makes it easy for you to automatically mark new orders as 'Ready For Pickup' as soon as they come in. Ideal for stores that always have products in stock and want to speed up the pickup process.

This makes use of the [fulfillmentOrderLineItemsPreparedForPickup GraphQL mutation.](https://shopify.dev/docs/api/admin-graphql/2023-07/mutations/fulfillmentOrderLineItemsPreparedForPickup)

This task was written with the help of ChatGPT-4, check out the [conversation here](https://chat.openai.com/share/e42b5476-6ec0-4ac8-8738-263858150ec4).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/automatically-mark-new-orders-as-ready-for-pickup), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-mark-new-orders-as-ready-for-pickup.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
