# Sync inventory across product variants

Tags: Inventory, Products, Sync, Variants

Useful for multiple price points, or for offering customizations of the same item, this task lets you offer multiple variant listings for what is ultimately the same stock. A purchase of a particular variant results in the inventory for all other variants, for the same product, being lowered by the amount ordered.

* View in the task library: [tasks.mechanic.dev/sync-inventory-across-product-variants](https://tasks.mechanic.dev/sync-inventory-across-product-variants)
* Task JSON, for direct import: [task.json](../../tasks/sync-inventory-across-product-variants.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tags_to_monitor__array": null,
  "product_types_to_monitor__array": null,
  "only_sync_active_products__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/10min
user/sync_variant_inventory/set_cache
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Useful for multiple price points, or for offering customizations of the same item, this task lets you offer multiple variant listings for what is ultimately the same stock. A purchase of a particular variant results in the inventory for all other variants, for the same product, being lowered by the amount ordered.

### Getting started

1. In the Shopify admin, navigate to the Products > Inventory area. Use the tools here to ensure that all products  you wish to monitor have the same "available" level for all of their variants at your default location.
2. In this task, populate the list of product tags or types to monitor (but not both!).
3. Click the "Run task" button. Mechanic will scan your products, and cache the current available inventory level for each one.
4. Wait! :) Every ten minutes, Mechanic will check your inventory, and make any adjustments necessary to keep everything in sync. For example, if three different inventory items - within the same product - are each sold three different times, Mechanic will ensure that each of those items are lowered by a further 6, and that all others are lowered by 9.

### Notes

* This task only counts and adjusts available inventory at the default location configured for your shop.
* To manually change inventory levels for a product, adjust _only one_ variant to the desired level. During the next scheduled run, the task will bring the other variants into sync.
* By default, Mechanic will check your inventory every 10 minutes. Feel free to change that subscription to "mechanic/scheduler/hourly", or [something else that suits your needs](https://learn.mechanic.dev/platform/events/topics#scheduler).
* If this task encounters issues syncing inventory for a product's variants, it will continue processing all other products if possible, and then log out an error with all of the products it cound not sync. You may optionally add the [Error reporter](https://tasks.mechanic.dev/error-reporter) task to your Mechanic instance if you would like to receive email notifications for these errors.
* If this task encounters products that have not yet had their inventory quantity cached, it will send them collectively to a custom event which runs in the same manner as a manual run, excepting that only these products will be processed to see if their cache entries can be set.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-inventory-across-product-variants), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-inventory-across-product-variants.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
