# Sync variant inventory within a product by pack size

Tags: Inventory, Products, Sync

Use this task to sell a single product in different pack sizes, keeping inventory levels synchronized appropriately, storing the "master" inventory level in a product tag (e.g. "inventory:50").

* View in the task library: [usemechanic.com/task/sync-variant-inventory-within-a-product-by-pack-size](https://usemechanic.com/task/sync-variant-inventory-within-a-product-by-pack-size)
* Task JSON, for direct import: [task.json](../../tasks/sync-variant-inventory-within-a-product-by-pack-size.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_inventory_tag_prefix__required": "inventory:",
  "variant_pack_size_option_name": "Pack size",
  "variant_pack_size_metafield_namespace": "",
  "variant_pack_size_metafield_key": "",
  "run_when_orders_are_paid_instead_of_when_they_are_created__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_when_orders_are_paid_instead_of_when_they_are_created__boolean %}shopify/orders/paid{% else %}shopify/orders/create{% endif %}
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to sell a single product in different pack sizes, keeping inventory levels synchronized appropriately, storing the "master" inventory level in a product tag (e.g. "inventory:50").

New orders for a pack-sized variant will result in the product's inventory tag being updated, and all pack-sized variants having their inventory levels re-synced. And, manually updating a product's inventory tag will automatically re-sync variant inventory levels as well.

The pack size for each variant can be determined by a numeric [product option](https://help.shopify.com/en/manual/products/variants) (e.g. "Pack size: 50"), or by [metafield](https://help.shopify.com/en/manual/products/metafields).

This task will skip any products that do not have an inventory tag, and will skip any variants ordered that have no pack size information.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/sync-variant-inventory-within-a-product-by-pack-size), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-variant-inventory-within-a-product-by-pack-size.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
