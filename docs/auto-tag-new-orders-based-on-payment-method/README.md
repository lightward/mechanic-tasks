# Auto-tag new orders based on payment method

Tags: Auto-Tag, Orders, Payment

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly.

* View in the task library: [tasks.mechanic.dev/auto-tag-new-orders-based-on-payment-method](https://tasks.mechanic.dev/auto-tag-new-orders-based-on-payment-method)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-based-on-payment-method.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "payment_gateway_name__required": null,
  "order_tag_to_add__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly.

Tip: to tag orders paid with a gift card, fill in "Payment gateway name" with "gift_card".

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-new-orders-based-on-payment-method), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-based-on-payment-method.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
