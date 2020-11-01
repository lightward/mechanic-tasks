# Send email when an order comes in

* [task.json](../../tasks/send-email-when-an-order-comes-in.json) (for import/export)
* [Task script](./script.liquid)

Use this task to notify staff (or suppliers, or anyone!) of incoming orders. Optionally, choose to only be notified when orders are paid, or only for orders that contain at least one product with a certain tag.

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

## Subscriptions

```liquid
{% if options.only_for_paid_orders__boolean %}
  shopify/orders/paid
{% else %}
  shopify/orders/create
{% endif %}
```

## Documentation

Use this task to notify staff (or suppliers, or anyone!) of incoming orders. Optionally, choose to only be notified when orders are paid, or only for orders that contain at least one product with a certain tag.
