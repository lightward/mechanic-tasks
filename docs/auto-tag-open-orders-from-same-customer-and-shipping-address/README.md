# Auto-tag open orders from the same customer with the same shipping address

Tags: Auto-Tag, Orders, Shipping

When a new order is created, this task will tag all open orders for the customer which match the new order's shipping address, giving you the potential to combine shipments.

* View in the task library: [tasks.mechanic.dev/auto-tag-open-orders-from-same-customer-and-shipping-address](https://tasks.mechanic.dev/auto-tag-open-orders-from-same-customer-and-shipping-address)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-open-orders-from-same-customer-and-shipping-address.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_apply__required": "combine_check"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When a new order is created, this task will tag all open orders for the customer which match the new order's shipping address, giving you the potential to combine shipments.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-open-orders-from-same-customer-and-shipping-address), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-open-orders-from-same-customer-and-shipping-address.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
