# Manage product market access by location stock status

Tags: Bulk, In stock, Markets, Out of Stock, Products, Publish, Unpublish

This task runs when inventory level changes occur at a configured location in the task, and it will check the stock status across all of that product's variants at each configured location. If the variants are all out of stock at a location, the task will unpublish the product from each catalog associated with each configured market for that location, thus denying the product from online sale in those markets. On the flipside, the task will publish a product to the related market catalogs if any of its variants are in stock at any of the configured locations for a market.

* View in the task library: [tasks.mechanic.dev/manage-product-market-access-by-location-stock-status](https://tasks.mechanic.dev/manage-product-market-access-by-location-stock-status)
* Task JSON, for direct import: [task.json](../../tasks/manage-product-market-access-by-location-stock-status.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "locations_and_market_names__keyval_multiline_required": null,
  "ignore_products_with_any_of_these_tags__array": null,
  "ignore_variants_that_do_not_track_inventory__boolean": false,
  "ignore_variants_that_are_configured_for_overselling__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs when inventory level changes occur at a configured location in the task, and it will check the stock status across all of that product's variants at each configured location. If the variants are all out of stock at a location, the task will unpublish the product from each catalog associated with each configured market for that location, thus denying the product from online sale in those markets. On the flipside, the task will publish a product to the related market catalogs if any of its variants are in stock at any of the configured locations for a market.

Configure the task with the location names on the left and the paired market names on the right. Multiple market names for a location should be entered on separate lines. Market names may be shared between locations, and only a single location needs to be in stock for a product to be published to that market.

The task may also be run manually to query for all active products in the shop and process them in the same manner. Optionally, enter tags for products that should be ignored completely by this task.

**Notes**:
- This task only processes region type markets
- In this task, a product is considered in stock at a location if ANY of its variants stocked at that location:
  - have inventory tracking disabled **OR**
  - have overselling enabled **OR**
  - have > 0 "available" inventory
- The logic checks for inventory tracking and overselling can each be ignored through their respective task options; meaning the task will skip the variants which meet that criteria.




## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/manage-product-market-access-by-location-stock-status), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-product-market-access-by-location-stock-status.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
