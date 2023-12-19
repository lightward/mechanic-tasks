# Unpublish products from markets when locations are out of stock

Tags: Bulk, Markets, Out of Stock, Products, Unpublish

This task will remove products from markets when they go out of stock at specific locations. It runs on inventory level changes, checking the "available" inventory across all variants for that product and location, and if they are all out of stock it will unpublish the product from the market's publication, thus denying the product from online sale in that market. 

* View in the task library: [tasks.mechanic.dev/manage-product-market-access-by-location-stock-status](https://tasks.mechanic.dev/manage-product-market-access-by-location-stock-status)
* Task JSON, for direct import: [task.json](../../tasks/manage-product-market-access-by-location-stock-status.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "locations_and_market_names__keyval_multiline_required": null
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

This task will remove products from markets when they go out of stock at specific locations. It runs on inventory level changes, checking the "available" inventory across all variants for that product and location, and if they are all out of stock it will unpublish the product from the market's publication, thus denying the product from online sale in that market. 

Configure the task with the location names on the left and the paired market names on the right. Multiple market names for a location should be entered on separate lines.

When the task is run manually it will query for all products in the shop with at least one variant out of stock at any location, and the process each of them as per above excepting that each configured location will be checked for each product.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/manage-product-market-access-by-location-stock-status), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-product-market-access-by-location-stock-status.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
