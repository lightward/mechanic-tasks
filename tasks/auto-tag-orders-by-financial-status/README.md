# Auto-tag orders by financial status

* [Task script](./script.liquid)

This task watches new and updated orders, and updates their tags according to their financial status.

## Default options

```json
{
  "financial_statuses_and_tags__required_keyval": {
    "pending": "payment-pending",
    "authorized": "",
    "partially_paid": "",
    "paid": "",
    "partially_refunded": "",
    "refunded": "",
    "voided": ""
  },
  "remove_outdated_financial_status_tags__boolean": true
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

## Documentation

This task watches new and updated orders, and updates their tags according to their financial status.