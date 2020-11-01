# Send an email alert when a customer places more than 2 orders in 24 hours

* [task.json](../../tasks/send-an-email-alert-when-a-customer-places-more-than-2-orders-in-24-hours.json) (for import/export)
* [Task script](./script.liquid)

Use this task to receive an email alert whenever a single customer exceeds a configurable order count, over the last configurable number of hours.

## Default options

```json
{
  "order_count_threshold__number_required": "2",
  "number_of_hours_to_look_back__number_required": "24",
  "email_recipient__email_required": "",
  "email_subject__required": "{{ order.customer.email }} has placed >= 2 orders in the last 24 hours",
  "email_body__required_multiline": "Hello,\n\nThe customer {{ order.customer.email }} has exceeded the configured order threshold.\n\n<a href=\"https://{{ shop.domain }}/admin/customers/{{ order.customer.id }}\">Manage this customer in Shopify</a>\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

Use this task to receive an email alert whenever a single customer exceeds a configurable order count, over the last configurable number of hours.

Note: This task does not distinguish by order source. When counting orders, all order sources are considered (e.g. the online storefront, the Shopify admin, other apps, etc).
