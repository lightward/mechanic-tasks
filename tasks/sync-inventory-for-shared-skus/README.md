# Sync inventory for shared SKUs

* [Task script](./script.liquid)

This task monitors all variants having a SKU that you configure, and ensures that changes to inventory quantity are reflected across all variants sharing that SKU.

## Default options

```json
{
  "product_skus_to_monitor__array_required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/10min
```

## Documentation

To set up this task, configure with the SKUs you'd like to monitor, manually synchronize all inventory quantities for those SKUs, then click the "Run task" button. This task will take a snapshot of the current inventory quantity for your SKUs. When the task automatically runs, every 10 minutes, it will check for changes to inventory, and ensure that the total change for a SKU is reflected across all product variants having that SKU.

Note: this task only works for Shopify stores that have a single location for inventory.

YouTube: [How this task was made](https://youtu.be/CoWvIdibz9Y)