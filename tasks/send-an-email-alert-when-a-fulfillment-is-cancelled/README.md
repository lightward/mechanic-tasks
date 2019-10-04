# Send an email alert when a fulfillment is cancelled

* [Task script](./script.liquid)

Useful for keeping an eye on unexpected cancellations by third party shipping services.

## Default options

```json
{
  "email_recipient__email_required": "",
  "email_subject__required": "A fulfillment for order {{ fulfillment.order.name | default: \"an order\" }} was cancelled",
  "email_body__multiline_required": "Hello,\n\nA fulfillment with {{ fulfillment.line_items.size }} line item(s) was cancelled.\n\n<a href=\"https://{{ shop.domain }}/admin/orders/{{ fulfillment.order.id }}\">Manage this order in Shopify</a>\n\nThanks,\nMechanic, for {{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/fulfillments/update
```

## Documentation

This task performs two actions: one to send an email, and one to "remember" that an email has been sent. (Without this second action, this task would send an email every time a cancelled fulfillment is updated.)