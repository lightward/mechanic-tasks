# Auto-tag orders by shipping address city

Tags: Auto-Tag, Orders, Shipping

This task automatically tags orders based on the city in the shipping address. Within this key you define the city and the tag on the order.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-by-shipping-address-city](https://tasks.mechanic.dev/auto-tag-orders-by-shipping-address-city)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-shipping-address-city.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "city__required": null,
  "tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task automatically tags orders based on the city in the shipping address. Within this key you define the city and the tag on the order.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-by-shipping-address-city), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-shipping-address-city.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
