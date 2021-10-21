# Send email when an order comes in

Tags: Alert, Email, Orders

Use this task to notify staff (or suppliers, or anyone!) of incoming orders. Optionally, choose to only be notified when orders are paid, or only for orders that contain at least one product with a certain tag.

* View in the task library: [usemechanic.com/task/send-email-when-an-order-comes-in](https://usemechanic.com/task/send-email-when-an-order-comes-in)
* Task JSON, for direct import: [task.json](../../tasks/send-email-when-an-order-comes-in.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_for_paid_orders__boolean": false,
  "only_for_orders_including_this_product_tag": null,
  "email_recipients__required": "sales@example.com, production@example.com",
  "email_subject__required": "New {{ order.financial_status }} order: {{ order.name }}",
  "email_body__required_multiline": "Hi team,\n\nPlease see details for order {{ order.name }}:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ order.id }}\n\nThanks,\n- Mechanic, for {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.only_for_paid_orders__boolean %}
  shopify/orders/paid
{% else %}
  shopify/orders/create
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to notify staff (or suppliers, or anyone!) of incoming orders. Optionally, choose to only be notified when orders are paid, or only for orders that contain at least one product with a certain tag.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-email-when-an-order-comes-in), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-email-when-an-order-comes-in.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
