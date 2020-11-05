# Auto-tag new orders based on payment method

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly.

* View in the task library: [usemechanic.com/task/auto-tag-new-orders-based-on-payment-method](https://usemechanic.com/task/auto-tag-new-orders-based-on-payment-method)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-based-on-payment-method.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "payment_gateway_name__required": null,
  "order_tag_to_add__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly.

Tip: to tag orders paid with a gift card, fill in "Payment gateway name" with "gift_card".

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-orders-based-on-payment-method), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-based-on-payment-method.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
