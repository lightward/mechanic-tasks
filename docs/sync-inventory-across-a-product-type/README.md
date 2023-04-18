# Sync inventory across a product type

Tags: Inventory, Products, Sync

Useful for custom orders, this task lets you offer multiple product and variant listings for what is ultimately the same stock. A purchase for a single product leads to the inventory for all other listings, of the same product type, being lowered by the amount ordered.

* View in the task library: [tasks.mechanic.dev/sync-inventory-across-a-product-type](https://tasks.mechanic.dev/sync-inventory-across-a-product-type)
* Task JSON, for direct import: [task.json](../../tasks/sync-inventory-across-a-product-type.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_types_to_monitor__array_required": null,
  "only_sync_active_products__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/10min
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Useful for custom orders, this task lets you offer multiple product and variant listings for what is ultimately the same stock. A purchase for a single product leads to the inventory for all other listings, of the same product type, being lowered by the amount ordered.

### Getting started

1. Populate the list of product types that you'd like this task to monitor.
2. In the Shopify admin, navigate to the Products > Inventory area. For the first product type that you've chosen, search for all inventory items with that specific type, and ensure that all inventory items have the same "available" level. Repeat for each additional product type you're using.
3. Back in Mechanic, click the "Run task" button. Mechanic will scan your product types, and cache the current available inventory for each one.
4. Wait! :) Every ten minutes, Mechanic will check your inventory, and make any adjustments necessary to keep everything in sync. For example, if three different inventory items - within the same product type - are each sold three different times, Mechanic will ensure that each of those items are lowered by a further 6, and that all others are lowered by 9.

### Notes

* This task only counts and adjusts available inventory at the default location configured in Shopify.
* By default, Mechanic will check your inventory every 10 minutes. Feel free to change that subscription to "mechanic/scheduler/hourly", or [something else that suits your needs](https://learn.mechanic.dev/platform/events/topics#scheduler).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-inventory-across-a-product-type), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-inventory-across-a-product-type.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
