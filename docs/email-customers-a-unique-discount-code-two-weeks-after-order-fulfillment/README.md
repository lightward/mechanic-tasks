# Email customers a unique discount code, two weeks after order fulfillment

* [task.json](../../tasks/email-customers-a-unique-discount-code-two-weeks-after-order-fulfillment.json) (for import/export)
* [Task script](./script.liquid)

This task generates a brand new discount code (copying configuration from another code, of your choice), and emails it to the customer, after waiting a configurable number of days after order fulfillment.

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

## Subscriptions

```liquid
shopify/orders/fulfilled{% if options.days_to_wait_after_order_fulfillment__number != blank %}+{{ options.days_to_wait_after_order_fulfillment__number }}.days{% endif %}
```

## Documentation

This task generates a brand new discount code (copying configuration from another code, of your choice), and emails it to the customer, after waiting a configurable number of days after order fulfillment.

Configure this task by first creating a discount code in your store, representative of the discount configuration you'd like this task to use. Provide the task with this source discount's code – when it runs, the task will clone this discount's configuration, using a new and unique discount name.

Configure with a number of days to wait after fulfillment, or remove this value completely to have the discount generated and sent immediately upon fulfillment.

Use the text "DISCOUNT_CODE" to have the generated discount code inserted into your email to the customer, in either the subject or body.
