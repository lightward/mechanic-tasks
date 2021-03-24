# Auto-connect new products to all locations

Tags: Multi-Location, Products, Inventory

Using Shopify's multi-locations feature, and importing products in bulk? Use this task to automatically connect each new product to every location for your store.

* View in the task library: [usemechanic.com/task/auto-connect-new-products-to-all-locations](https://usemechanic.com/task/auto-connect-new-products-to-all-locations)
* Task JSON, for direct import: [task.json](../../tasks/auto-connect-new-products-to-all-locations.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "track_inventory_using_shopify__boolean": true,
  "allow_orders_for_out_of_stock_products__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Using Shopify's multi-locations feature, and importing products in bulk? Use this task to automatically connect each new product to every location for your store.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-connect-new-products-to-all-locations), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-connect-new-products-to-all-locations.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
