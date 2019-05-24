# Sync inventory across a product type

* [Task script](./script.liquid)

Useful for custom orders, this task lets you offer multiple product and variant listings for what is ultimately the same stock. A purchase for a single product leads to the inventory for all other listings, of the same product type, being lowered by the amount ordered.

## Default options

```json
{
  "product_types_to_monitor__array_required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/10min
```

## Documentation

### Getting started

1. Populate the list of product types that you'd like this task to monitor.
2. In the Shopify admin, navigate to the Products > Inventory area. For the first product type that you've chosen, search for all inventory items with that specific type, and ensure that all inventory items are at the same level. Repeat for each additional product type you're using.
3. Back in Mechanic, click the "Run task" button. Mechanic will scan your product types, and cache the current inventory level for each one.
4. Wait! :) Every ten minutes, Mechanic will check your inventory, and make any adjustments necessary to keep everything in sync. For example, if three different inventory items - within the same product type - are each sold three different times, Mechanic will ensure that each of those items are lowered by a further 6, and that all others are lowered by 9.

### Notes

* This task only works with a single location. Multiple locations are not supported.
* By default, Mechanic will check your inventory every 10 minutes. Feel free to change that subscription to "mechanic/scheduler/hourly", or [something else that suits your needs](https://help.usemechanic.com/events/all-event-topics#mechanic).