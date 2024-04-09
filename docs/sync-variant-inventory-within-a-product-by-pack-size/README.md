# Sync variant inventory within a product by pack size

Tags: Inventory, Products, Sync

Use this task to sell a single product in different pack sizes, keeping available inventory levels synchronized appropriately, storing the "main" inventory level in a product tag (e.g. "inventory:50").

* View in the task library: [tasks.mechanic.dev/sync-variant-inventory-within-a-product-by-pack-size](https://tasks.mechanic.dev/sync-variant-inventory-within-a-product-by-pack-size)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_when_orders_are_paid_instead_of_when_they_are_created__boolean %}
  shopify/orders/paid
{% else %}
  shopify/orders/create
{% endif %}
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to sell a single product in different pack sizes, keeping available inventory levels synchronized appropriately, storing the "main" inventory level in a product tag (e.g. "inventory:50").

New orders for a pack-sized variant will result in the product's inventory tag being updated, and all pack-sized variants having their available inventory levels re-synced. Manually updating a product's inventory tag will automatically re-sync variant available inventory levels as well.

The pack size for each variant can be determined by a numeric product option or by metafield:

**Product option** - Enter the product option name from your product page into the Variant pack size option name field. Mechanic will use the option values, which must be numeric, to determine the pack size (e.g. if your option is called "Pack size", enter that into the field).

**Metafield** - Once you've added the metafield values to your variants, enter the namespace and key in the task options fields. When an order is placed, Mechanic will use the variant's metafield to determine the pack size.

**Notes:**
- This task will skip any products that do not have an inventory tag, and will skip any variants ordered that have no pack size information.
- This task will not increase inventory when orders are cancelled and restocked.
- If you have existing inventory on your variants, this task will overwrite inventory values based on the inventory tag.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-variant-inventory-within-a-product-by-pack-size), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-variant-inventory-within-a-product-by-pack-size.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
