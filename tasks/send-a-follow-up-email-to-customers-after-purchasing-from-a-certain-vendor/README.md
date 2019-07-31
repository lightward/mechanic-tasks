# Send a follow-up email to customers after purchasing from a certain vendor

* [Task script](./script.liquid)

This task will send a follow-up email to your customer after their order is paid, waiting for a configurable number of days before doing so.

## Default options

```json
{
  "product_vendor__required": null,
  "email_subject__required": "Following up on your order ({{ order.name }})",
  "email_body__required_multiline": "Hello,\n\nThanks for ordering a (add your vendor!) product from {{ shop.name }}! Here's some important information you need to know...\n\nThanks,\n{{ shop.name }}",
  "number_of_days_to_wait_before_sending_email__number": ""
}
```

## Subscriptions

```liquid
shopify/orders/create{% if options.number_of_days_to_wait_before_sending_email__number != blank %}+{{ options.number_of_days_to_wait_before_sending_email__number }}.days{% endif %}
```

## Documentation

This task will send a follow-up email to your customer after their order is paid. Configure it with the name of the vendor to watch for. The vendor name is case-sensitive!