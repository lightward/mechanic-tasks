# Capture order payment upon fulfillment

Tags: Fulfillment, Payment

Upon the fulfillment of an authorized or partially paid order, this task attempts to capture all open authorized payments for that order. (Multiple authorizations can exist on edited orders or with post-purchase upsells.)

* View in the task library: [tasks.mechanic.dev/capture-order-payment-upon-fulfillment](https://tasks.mechanic.dev/capture-order-payment-upon-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/capture-order-payment-upon-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/fulfilled
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Upon the fulfillment of an authorized or partially paid order, this task attempts to capture all open authorized payments for that order. (Multiple authorizations can exist on edited orders or with post-purchase upsells.)

If the order is modified before capturing, due to applying discounts, changing shipping fees, and/or making item adjustments, then this task will only capture up to a maximum of the current order total. Refunds that are not associated with an item adjustment are not supported by this task.

For expected results, be sure to enable "Manually capture payment for orders" in Shopify, [using this guide](https://help.shopify.com/en/manual/payments/payment-authorization#set-up-manual-capture-of-credit-card-payments).

__Please note__: You are responsible for ensuring that fulfillment occurs within the order payment's authorization period.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/capture-order-payment-upon-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/capture-order-payment-upon-fulfillment.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
