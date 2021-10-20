# Send a new-order email to someone based on a cart attribute

Tags: Cart Attributes, Email, Orders

This task sends a new-order email alert to somebody specific, based on the contents of a cart attribute. Useful for allowing customers to select their salesperson, alerting the appropriate salesperson when the order is placed.

* View in the task library: [usemechanic.com/task/send-a-new-order-email-to-someone-based-on-a-cart-attribute](https://usemechanic.com/task/send-a-new-order-email-to-someone-based-on-a-cart-attribute)
* Task JSON, for direct import: [task.json](../../tasks/send-a-new-order-email-to-someone-based-on-a-cart-attribute.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "cart_attribute_name__required": "Salesperson",
  "cart_attribute_values_and_email_addresses__keyval_email_required": {
    "Jenny ": "jenny@example.com",
    "Zhang Wei": "zhangwei@example.com"
  },
  "email_subject__required": "You've got an order! {{ order.name }}",
  "email_body__multiline_required": "Hello,\n\nAn order has arrived, and it's assigned to you.\n\nhttps://{{ shop.domain }}/admin/orders/{{ order.id }}\n\nThanks,\n{{ shop.name }}",
  "only_send_for_paid_orders__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.only_send_for_paid_orders__boolean %}
  shopify/orders/paid
{% else %}
  shopify/orders/create
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task sends a new-order email alert to somebody specific, based on the contents of a cart attribute. Useful for allowing customers to select their salesperson, alerting the appropriate salesperson when the order is placed.

This task sends a new-order email alert to somebody specific, based on the contents of a cart attribute. If a matching email address is not found in the task's configuration, no email will be sent.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-a-new-order-email-to-someone-based-on-a-cart-attribute), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-new-order-email-to-someone-based-on-a-cart-attribute.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
