# Publish back-in-stock products

* [Task script](./script.liquid)

Whenever inventory for a product is updated, this task scans all variants and all fulfillment locations, adds up all inventory related to that product, and makes sure the product is published if the total inventory meets your "back in stock" threshold. Optionally, it'll send you an email when it does so.

## Default options

```json
{
  "email_notification_recipient__email": "",
  "back_in_stock_inventory_quantity__number_required": "1"
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
```

## Documentation

(none)