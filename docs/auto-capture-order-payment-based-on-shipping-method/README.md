# Auto-capture order payment based on shipping method

Tags: Payment, Shipping

This task auto-captures payment if the customer has selected a certain shipping method. Useful for expedited order fulfillments.

* View in the task library: [usemechanic.com/task/auto-capture-order-payment-based-on-shipping-method](https://usemechanic.com/task/auto-capture-order-payment-based-on-shipping-method)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-order-payment-based-on-shipping-method.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "allowed_shipping_methods__required_array": []
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task auto-captures payment if the customer has selected a certain shipping method. Useful for expedited order fulfillments.

For expected results, be sure to enable "Manually capture payment for orders" in Shopify, [using this guide](https://help.shopify.com/en/manual/payments/payment-authorization#set-up-manual-capture-of-credit-card-payments).

Please note: This task will *only* capture payment for orders that have the financial status "authorized". You are responsible for ensuring that fulfillment occurs within the order payment's authorization period.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-capture-order-payment-based-on-shipping-method), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-order-payment-based-on-shipping-method.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
