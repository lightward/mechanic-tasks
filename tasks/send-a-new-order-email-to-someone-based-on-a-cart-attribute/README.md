# Send a new-order email to someone based on a cart attribute

* [Task script](./script.liquid)

This task sends a new-order email alert to somebody specific, based on the contents of a cart attribute. Useful for allowing customers to select their salesperson, alerting the appropriate salesperson when the order is placed.

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

## Subscriptions

```liquid
{% if options.only_send_for_paid_orders__boolean %}
  shopify/orders/paid
{% else %}
  shopify/orders/create
{% endif %}
```

## Documentation

This task sends a new-order email alert to somebody specific, based on the contents of a cart attribute. If a matching email address is not found in the task's configuration, no email will be sent.