# Auto-tag new orders based on payment method

* [Task script](./script.liquid)

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly.

## Default options

```json
{
  "payment_gateway_name__required": null,
  "order_tag_to_add__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly.

Tip: to tag orders paid with a gift card, fill in "Payment gateway name" with "gift_card".