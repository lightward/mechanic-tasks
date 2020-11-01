# Reissue single-use discount codes after order cancellation

* [task.json](../../tasks/reissue-single-use-discount-codes-after-order-cancellation.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
