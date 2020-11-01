# Auto-tag orders by financial status

* [task.json](../../tasks/auto-tag-orders-by-financial-status.json) (for import/export)
* [Task script](./script.liquid)

null

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

null
