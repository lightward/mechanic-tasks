# Email someone when a certain product is purchased

* [Task script](./script.liquid)

This task sends an email notification, immediately after an order is paid - if a product in the order has a title matching the product title you configure. Optionally, configure this task with a delay, in days, to wait before sending the email.

## Default options

```json
{
  "product_title__required": null,
  "email_address__required": null,
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "reply_to_email_address": null,
  "number_of_days_to_wait_before_emailing__number": null
}
```

## Subscriptions

```liquid
{% assign delay_days = options.number_of_days_to_wait_before_emailing__number %}
shopify/orders/paid{% if delay_days != blank %}+{{ delay_days }}.days{% endif %}
```

## Documentation

This task sends an email notification, immediately after an order is paid - if a product in the order has a title matching the product title you configure. Optionally, configure this task with a delay, in days, to wait before sending the email. (The task will not send any emails for orders that have since been cancelled.)

[YouTube: See the upgrade process for this task!](https://youtu.be/xT9j0yMXPDM)