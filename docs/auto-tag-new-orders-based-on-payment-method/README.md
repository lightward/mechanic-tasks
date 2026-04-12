# Auto-tag new orders based on payment method

Tags: Auto-Tag, Orders, Payment

This task checks the payment gateways and payment methods on order creation and updates, and tags the order accordingly if any of the gateways or methods match a configured value.

* View in the task library: [tasks.mechanic.dev/auto-tag-new-orders-based-on-payment-method](https://tasks.mechanic.dev/auto-tag-new-orders-based-on-payment-method)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-based-on-payment-method.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "payment_gateway_names_and_tags__keyval_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated+15.seconds
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task checks the payment gateways and payment methods on order creation and updates, and tags the order accordingly if any of the gateways or methods match a configured value.

Configure the "Payment gateway names and tags" fields with each payment gateway name you wish to monitor on the left, and the associated tag on the right.

Tip: this task will log out the payment gateways and methods from success transactions on each run, so review the log to verify any configuration values you wish to use (e.g. "gift_card", "paypal"). Case-sensitivity is important!

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-new-orders-based-on-payment-method), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-based-on-payment-method.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
