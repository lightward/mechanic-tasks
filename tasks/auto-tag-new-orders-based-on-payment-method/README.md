# Auto-tag new orders based on payment method

* [Task script](./script.liquid)

This task checks the payment method for new orders immediately upon order creation, and tags the order accordingly. (If you need to tag the order later on, based on updates or when the order is paid, get in touch!)

## Default options

```json
{
  "payment_gateway_name__required": null,
  "comma_separated_tags_to_add__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

(none)