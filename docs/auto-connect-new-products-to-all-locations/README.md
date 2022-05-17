# Auto-connect new products to all locations

Tags: Inventory, Multi-Location, Products

Using Shopify's multi-locations feature, and importing products in bulk? Use this task to automatically connect each new product to every location for your store.

* View in the task library: [tasks.mechanic.dev/auto-connect-new-products-to-all-locations](https://tasks.mechanic.dev/auto-connect-new-products-to-all-locations)
* Task JSON, for direct import: [task.json](../../tasks/auto-connect-new-products-to-all-locations.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "track_inventory_using_shopify__boolean": true,
  "allow_orders_for_out_of_stock_products__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Using Shopify's multi-locations feature, and importing products in bulk? Use this task to automatically connect each new product to every location for your store.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-connect-new-products-to-all-locations), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-connect-new-products-to-all-locations.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
