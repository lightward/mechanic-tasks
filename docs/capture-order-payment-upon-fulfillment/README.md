# Capture order payment upon fulfillment

Tags: Payment, Fulfillment

Short and simple. :) Upon the fulfillment of an authorized order, this task attempts to capture payment for that order.

* View in the task library: [usemechanic.com/task/capture-order-payment-upon-fulfillment](https://usemechanic.com/task/capture-order-payment-upon-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/capture-order-payment-upon-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/fulfilled
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Short and simple. :) Upon the fulfillment of an authorized order, this task attempts to capture payment for that order.

For expected results, be sure to enable "Manually capture payment for orders" in Shopify, [using this guide](https://help.shopify.com/en/manual/payments/payment-authorization#set-up-manual-capture-of-credit-card-payments).

Please note: This task will *only* capture payment for orders that have the financial status "authorized". You are responsible for ensuring that fulfillment occurs within the order payment's authorization period.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/capture-order-payment-upon-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/capture-order-payment-upon-fulfillment.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
