# Maintain inventory for a product bundle

* [Task script](./script.liquid)

Use this task to automatically sync inventory for a simple product bundle – no theme modifications required. When configured with unique SKUs for the bundle and its components, this task keeps the bundle inventory equal to the lowest inventory level of its component products, and appropriately subtracts from component inventory whenever the bundle is ordered. When a bundle order is refunded, the components are raised back up, appropriately. 

## Default options

```json
{
  "bundle_product_sku__required": null,
  "component_product_skus__array_required": null,
  "inventory_buffer_quantity__number": null
}
```

## Subscriptions

```liquid
shopify/orders/create
shopify/refunds/create
shopify/inventory_levels/update
mechanic/user/trigger
```

## Documentation

Usage:

* Run this task manually to sync the bundle's inventory with that of the component product that has the least inventory in stock.
* This task will run automatically whenever the bundle product is ordered, and whenever the bundle product is refunded in such a way that it is restocked.

Requirements:

* This task does not support multiple inventory locations.
* Configure this task with unique SKUs for the bundle product and its component products. These SKUs must not be re-used for any other product variants in your store. However, any component SKU may be used for multiple copies of this task.

Notes:

* Whenever this task runs, manual inventory updates to the bundle product will be overwritten.
* Feel free to manually adjust inventory for component products. The bundle product's inventory will be synced appropriately.
* Use the "Inventory buffer quantity" option to keep the bundle's inventory lower than its lowest component product's inventory, by whatever amount you prefer.