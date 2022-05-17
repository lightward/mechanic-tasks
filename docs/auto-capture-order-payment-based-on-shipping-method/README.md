# Auto-capture order payment based on shipping method

Tags: Payment, Shipping

This task auto-captures payment if the customer has selected a certain shipping method. Useful for expedited order fulfillments.

* View in the task library: [tasks.mechanic.dev/auto-capture-order-payment-based-on-shipping-method](https://tasks.mechanic.dev/auto-capture-order-payment-based-on-shipping-method)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-order-payment-based-on-shipping-method.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "allowed_shipping_methods__required_array": []
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task auto-captures payment if the customer has selected a certain shipping method. Useful for expedited order fulfillments.

To use this task, populate the "Allowed shipping methods" list with shipping method titles (e.g. "Economy"). In Shopify, shipping method titles are configured as "rates"; you can find yours by navigating to Settings > Shipping and delivery, and then looking at the rates within each shipping zone.

For expected results, be sure to enable "Manually capture payment for orders" in Shopify, [using this guide](https://help.shopify.com/en/manual/payments/payment-authorization#set-up-manual-capture-of-credit-card-payments).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-capture-order-payment-based-on-shipping-method), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-order-payment-based-on-shipping-method.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
