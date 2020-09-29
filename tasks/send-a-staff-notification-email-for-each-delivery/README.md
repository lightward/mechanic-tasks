# Send a staff notification email for each delivery

* [Task script](./script.liquid)

Use this task to send a staff email, the moment Shopify registers a successful delivery.

## Default options

```json
{
  "email_recipient__email_required": null,
  "email_subject__required": "Fulfillment {{ fulfillment_event.fulfillment.name | default: \"#1234.1\" }} has been delivered!",
  "email_body__multiline_required": "For more details, see order {{ fulfillment_event.order.name | default: \"#1234\" }} in Shopify:\n\nhttps://{{ shop.domain }}/admin/orders/{{ fulfillment_event.order_id }}\n\nThanks,\nMechanic"
}
```

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

## Documentation

Use this task to send a staff email, the moment Shopify registers a successful delivery.