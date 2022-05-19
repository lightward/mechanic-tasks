# Credit customers for sample orders

Tags: Customers, Orders

Offer free samples to your customers at a nominal fee, and offer them that value back as a discount on a future order. This task generates a discount code, good for the amount of the sample order, and emails it to the customer.

* View in the task library: [tasks.mechanic.dev/credit-customers-for-sample-orders](https://tasks.mechanic.dev/credit-customers-for-sample-orders)
* Task JSON, for direct import: [task.json](../../tasks/credit-customers-for-sample-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sample_order_total__number_required": 2.5,
  "email_subject__required": "Thank you for your order! ({{ order.name }})",
  "email_body__multiline_required": "Hi {{ order.customer.first_name | default: \"there\" }},\n\nThank you for ordering a sample! Please use this discount code to apply this value to your next order:\n\nDISCOUNT_CODE\n\nThanks,\nThe team at {{ shop.name }}",
  "number_of_hours_to_wait__number": null,
  "number_of_days_before_discounts_expire__number": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid{% if options.number_of_hours_to_wait__number != blank %}+{{ options.number_of_hours_to_wait__number }}.hours{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Offer free samples to your customers at a nominal fee, and offer them that value back as a discount on a future order. This task generates a discount code, good for the amount of the sample order, and emails it to the customer.

This task will watch for newly paid orders, having a total that matches the number you configure. When a matching order comes in, this task generates a discount code, and emails it to the customer. The code can only be used once, by the customer who placed the original order, and must be used on an order that at least the value of the original order.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/credit-customers-for-sample-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/credit-customers-for-sample-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
