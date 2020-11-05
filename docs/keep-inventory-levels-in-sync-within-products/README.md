# Keep inventory levels in sync within products

Useful for selling, say, a limited print with different framing options, this task makes sure that a product's inventory levels, for each variant and location, are all kept in sync.

* View in the task library: [usemechanic.com/task/keep-inventory-levels-in-sync-within-products](https://usemechanic.com/task/keep-inventory-levels-in-sync-within-products)
* Task JSON, for direct import: [task.json](../../tasks/keep-inventory-levels-in-sync-within-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "filter_by_these_location_names__array": [],
  "filter_by_these_product_types__array": []
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful for selling, say, a limited print with different framing options, this task makes sure that a product's inventory levels, for each variant and location, are all kept in sync.

When an inventory level is updated, this task will update the inventory for all other variants of the same product.

Optionally, configure this task to filter for certain location names and product types. If you leave these blank, the task will monitor and update inventory across all locations, and for all product types.

**Limitations**

Changes to multiple inventory items for a single product, within the span of 60 seconds, will result in only the first inventory change being applied to all inventory items. For example, if a customer purchases a framed _and_ unframed version of the same print, the inventory levels for that product will only be decremented by 1, not by 2. If this is causing trouble for you, let us know!

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/keep-inventory-levels-in-sync-within-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/keep-inventory-levels-in-sync-within-products.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
