# Email someone when a certain variant is purchased

* [Task script](./script.liquid)

This task allows you to send an email to someone when a certain variant is purchased. Requires the variant ID.

## Default options

```json
{
  "email_address__required": null,
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "reply_to_email_address": null,
  "variant_id__number_required": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

This task requires that you enter the variant ID. You can find the variant id using this method: 
https://help.shopify.com/en/themes/customization/products/variants/find-variant-id