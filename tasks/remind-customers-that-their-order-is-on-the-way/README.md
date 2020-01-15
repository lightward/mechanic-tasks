# Remind customers that their order is on the way

* [Task script](./script.liquid)

Do you ship custom items, or do you have a lengthy turnaround time on your orders? Use this task to automatically re-assure customers that their order is in the queue, to be shipped as soon as possible. By default, this task sends an email 10 days (or a number you configure) after the order is paid, as long as the order remains fully paid, unfulfilled, and un-cancelled.

## Default options

```json
{
  "email_subject__required": "Don't worry – {{ order.name }} is still coming!",
  "email_body__multiline_required": "Hi {{ order.customer.first_name | default: \"there\" }},\n\nThank you for your order! We're writing to let you know that your order is still enqueued, and will be shipped to you as soon as it's ready. :)\n\nJust reply to this email if you have any questions.\n\nThanks,\n{{ shop.name }}",
  "tag_to_add_to_order": null,
  "tag_to_add_to_customer": null,
  "number_of_days_to_wait__number_required": 10
}
```

## Subscriptions

```liquid
shopify/orders/paid+{{ options.number_of_days_to_wait__number_required | default: 10 }}.days
```

## Documentation

This task sends an email x days after the order is paid, as long as the order remains fully paid, unfulfilled, and un-cancelled. Optionally, configure tags to add to the order and/or customer, to be added when the email is sent.