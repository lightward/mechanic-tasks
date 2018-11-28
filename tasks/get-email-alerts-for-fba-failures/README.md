# Get email alerts for FBA failures

* [Task script](./script.liquid)

Using Fulfillment By Amazon for your business? Stay on top of your customer experience by getting notified whenever FBA is unable to fulfill your order.

## Default options

```json
{
  "email_subject__required": "FBA failure for order {{ fulfillment.order.name | default: \"#12345\" }}",
  "email_body__multiline_required": "Hello,\n\nAmazon has reported a fulfillment failure for order {{ fulfillment.order.name | default: \"#12345\" }}. Here's the message they included:\n\n> {{ fulfillment.receipt.response_message | default: \"(no message given)\" }}\n\nView this order's details in Shopify:\n\nhttps://{{ shop.myshopify_domain }}/admin/orders/{{ fulfillment.order.id | default: 12345 }}\n\nThanks,\n\n- Mechanic, for {{ shop.name }}",
  "email_recipient__email_required": null
}
```

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
```

## Documentation

(none)