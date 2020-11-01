# Auto-tag out-of-stock products

* [task.json](../../tasks/auto-tag-out-of-stock-products.json) (for import/export)
* [Task script](./script.liquid)

Does what it says on the tin. :) Optionally, emails you an alert when a product goes out of stock.

## Default options

```json
{
  "out_of_stock_inventory_level__number_required": 0,
  "product_tag__required": "out-of-stock",
  "email_alert_recipient__email": null
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

## Documentation

Does what it says on the tin. :) Optionally, emails you an alert when a product goes out of stock.

Run this task manually to scan and tag all products in your store, according to their respective total inventory levels. Fill in the email alert recipient to send an email alert when a product goes out of stock.
