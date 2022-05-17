# Email customers a unique discount code, two weeks after order fulfillment

Tags: Customers, Discounts, Schedule

This task generates a brand new discount code (copying configuration from another code, of your choice), and emails it to the customer, after waiting a configurable number of days after order fulfillment.

* View in the task library: [tasks.mechanic.dev/email-customers-a-unique-discount-code-two-weeks-after-order-fulfillment](https://tasks.mechanic.dev/email-customers-a-unique-discount-code-two-weeks-after-order-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/email-customers-a-unique-discount-code-two-weeks-after-order-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_after_order_fulfillment__number": 14,
  "source_discount_code_for_cloning__required": null,
  "override_source_with_this_discount_validitity_period_in_days__number": null,
  "new_discount_code_prefix": null,
  "email_subject__required": "Thanks for your order! We've attached your discount. :)",
  "email_body__required_multiline": "Hello {{ order.customer.first_name | default: \"there\" }},\n\nThanks for your order ({{ order.name }})! You can use the discount code DISCOUNT_CODE on your  next order.\n\nCheers,\n{{ shop.name }}",
  "email_bcc__email": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/fulfilled{% if options.days_to_wait_after_order_fulfillment__number != blank %}+{{ options.days_to_wait_after_order_fulfillment__number }}.days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task generates a brand new discount code (copying configuration from another code, of your choice), and emails it to the customer, after waiting a configurable number of days after order fulfillment.

Configure this task by first creating a discount code in your store, representative of the discount configuration you'd like this task to use. Provide the task with this source discount's code – when it runs, the task will clone this discount's configuration, using a new and unique discount name.

Configure with a number of days to wait after fulfillment, or remove this value completely to have the discount generated and sent immediately upon fulfillment.

Use the text "DISCOUNT_CODE" to have the generated discount code inserted into your email to the customer, in either the subject or body.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-customers-a-unique-discount-code-two-weeks-after-order-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-customers-a-unique-discount-code-two-weeks-after-order-fulfillment.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
