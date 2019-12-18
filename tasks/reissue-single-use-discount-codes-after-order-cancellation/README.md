# Reissue single-use discount codes after order cancellation

* [Task script](./script.liquid)

This task watches for cancellations of orders that have either a single-use discount code, or a discount code that can only be used once per customer. When such an order is found, this task creates a new copy of the discount exclusively for the related customer, using a new discount code, and emails it to the customer.

## Default options

```json
{
  "ignore_discount_codes_containing_this_text": null,
  "email_subject__required": "We've issued you a new discount code",
  "email_body__required_multiline": "Hello,\n\nNow that order {{ order.name }} has been cancelled, we wanted to make sure you have another chance to use your discount.\n\nYour new discount code: REISSUED_DISCOUNT_CODE\n\nThanks,\n{{ shop.name }}",
  "email_bcc__email": null
}
```

## Subscriptions

```liquid
shopify/orders/cancelled
```

## Documentation

This task watches for cancellations of orders that have either a single-use discount code, or a discount code that can only be used once per customer. When such an order is found, this task creates a new copy of the discount exclusively for the related customer, using a new discount code, and emails it to the customer.

This task only supports basic discounts, having up to 250 products or collections (if any). Shipping discounts and buy-one-get-one discounts are not supported.