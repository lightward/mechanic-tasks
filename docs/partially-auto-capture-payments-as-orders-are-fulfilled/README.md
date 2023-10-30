# Partially auto-capture payments as orders are fulfilled

Tags: Fulfillment, Orders, Payment

Running when an order is updated, this task captures payment in proportion to the order value that has been fulfilled. For example, for an order with a subtotal of $10 and a total of $15 with shipping/taxes/discounts, this task will capture $7.50 when $5 of the order's value has been fulfilled.

* View in the task library: [tasks.mechanic.dev/partially-auto-capture-payments-as-orders-are-fulfilled](https://tasks.mechanic.dev/partially-auto-capture-payments-as-orders-are-fulfilled)
* Task JSON, for direct import: [task.json](../../tasks/partially-auto-capture-payments-as-orders-are-fulfilled.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "payment_gateway_names__array_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Running when an order is updated, this task captures payment in proportion to the order value that has been fulfilled. For example, for an order with a subtotal of $10 and a total of $15 with shipping/taxes/discounts, this task will capture $7.50 when $5 of the order's value has been fulfilled.

This task only works with payment gateways that support multiple captures against an authorization, which includes Shopify Payments. However, this task will not process orders that use multiple payment gateways *on the same order*.

Note: To find the payment gateway names, you will need to check the **payment_gateway_names** field on any order that uses the gateway(s) you wish to configure in this task. One method of doing this is to add **.json** to the end of the order admin page address, and searching for *payment_gateway_names* (e.g. "https[]()://admin.shopify.com/store/my-shop/orders/1234567890.json").

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/partially-auto-capture-payments-as-orders-are-fulfilled), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/partially-auto-capture-payments-as-orders-are-fulfilled.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
