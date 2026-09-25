# Auto-associate products with a shipping collection, by product tag

Tags: Collections, Delivery, Products, Tag

Automatically add tagged products to a shipping collection, and remove them when the tag is removed.

* View in the task library: [tasks.mechanic.dev/auto-associate-products-with-a-shipping-collection-by-product-tag](https://tasks.mechanic.dev/auto-associate-products-with-a-shipping-collection-by-product-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-associate-products-with-a-shipping-collection-by-product-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_product_tag__required": "special",
  "shipping_collection__picker_collection_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Automatically add tagged products to a shipping collection, and remove them when the tag is removed.

Use this task with Shopify market-driven shipping. Select the collection used by the product conditions on your shipping option in Shopify Markets. Shopify may have created this collection when migrating your delivery profile. Select the actual collection; an old delivery profile ID cannot identify it. This task manages collection membership only. It does not create collections, configure rates, attach collections to shipping options, or change other collections.

The selected collection must have exactly one manual source, with no automated conditions, exclusions, sub-collections, or app owner. Use a collection dedicated to this shipping rule: its membership may also affect storefronts, discounts, or other features that use the same collection. Both product-level and variant-level manual sources are supported. Product changes are handled as they happen; this task does not backfill every product when installed.

To replace [Auto-associate products with a delivery profile, by product tag](https://tasks.mechanic.dev/auto-associate-products-with-a-delivery-profile-by-product-tag), copy its tag or metafield settings into this task, choose the corresponding shipping collection, and review the task preview and permissions before enabling it. Disable the delivery-profile task once you switch. Test matching and nonmatching products in checkout to confirm the expected rates.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-associate-products-with-a-shipping-collection-by-product-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-associate-products-with-a-shipping-collection-by-product-tag.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
