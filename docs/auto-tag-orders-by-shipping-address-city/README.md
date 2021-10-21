# Auto-tag orders by shipping address city

Tags: Auto-Tag, Orders, Shipping

This task automatically tags orders based on the city in the shipping address. Within this key you define the city and the tag on the order.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-shipping-address-city](https://usemechanic.com/task/auto-tag-orders-by-shipping-address-city)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-shipping-address-city.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "city__required": null,
  "tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task automatically tags orders based on the city in the shipping address. Within this key you define the city and the tag on the order.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-shipping-address-city), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-shipping-address-city.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
