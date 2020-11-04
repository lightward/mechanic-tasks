# Calculate total quantities purchased by SKU

* [task.json](../../tasks/calculate-total-quantities-purchased-by-sku.json) (for import/export)
* [Task script](./script.liquid)

This task scans all orders, regardless of status, and counts up the lifetime quantity purchased for each SKU, listing each SKU with its quantity and all related order names. This task demonstrates Shopify's bulk operations API.

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

This task scans all orders, regardless of status, and counts up the lifetime quantity purchased for each SKU, listing each SKU with its quantity and all related order names. This task demonstrates Shopify's bulk operations API.
