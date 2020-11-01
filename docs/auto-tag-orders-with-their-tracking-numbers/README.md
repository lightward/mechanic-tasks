# Auto-tag orders with their tracking numbers

* [task.json](../../tasks/auto-tag-orders-with-their-tracking-numbers.json) (for import/export)
* [Task script](./script.liquid)

Tracking numbers aren't generally searchable within Shopify. Use this task to fix that, by copying all fulfillment tracking numbers over to the order itself, as (searchable!) order tags.

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

Tracking numbers aren't generally searchable within Shopify. Use this task to fix that, by copying all fulfillment tracking numbers over to the order itself, as (searchable!) order tags.

This task runs when fulfillments are created or updated, adding the fulfillment's tracking number(s) to the order's tags. Run this task manually to scan and tag all of your store's existing orders.

Please note: any special characters in the tracking number may be ignored by Shopify.

[YouTube: Watch the development video!](https://youtu.be/qNsdDaPYl24)
