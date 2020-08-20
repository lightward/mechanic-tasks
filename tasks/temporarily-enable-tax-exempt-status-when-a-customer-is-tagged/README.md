# Temporarily enable tax-exempt status when a customer is tagged

* [Task script](./script.liquid)

This task monitors customer tags, applying tax-exempt status when a certain tag is detected, and removing it (and the tag) after a certain amount of time. Useful when you need to regularly re-approve customers for tax exemption.

## Default options

```json
{
  "tax_exempt_tag__required": "tax-exempt-for-30-days",
  "days_before_removing_tax_exempt_status__number_required": 30
}
```

## Subscriptions

```liquid
shopify/customers/update
user/customers/expire_tax_exempt
```

## Documentation

(none)