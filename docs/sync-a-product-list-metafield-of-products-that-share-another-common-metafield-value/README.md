# Sync a Product List Metafield Of Products That Share Another Common Metafield Value

Tags: Bulk, Metafields, Products, Sync

This task runs across all active products on your store and syncs a list type product reference metafield to contain all products with a matching common single metafield value (the 'group by' meatfield).

* View in the task library: [tasks.mechanic.dev/sync-a-product-list-metafield-of-products-that-share-another-common-metafield-value](https://tasks.mechanic.dev/sync-a-product-list-metafield-of-products-that-share-another-common-metafield-value)
* Task JSON, for direct import: [task.json](../../tasks/sync-a-product-list-metafield-of-products-that-share-another-common-metafield-value.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "group_by_metafield_namespace__required": "custom",
  "group_by_metafield_key__required": "product_group",
  "product_list_metafield_namespace__required": "custom",
  "product_list_metafield_key__required": "product_list",
  "remove_out_of_stock_products__boolean": false,
  "include_current_product__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs across all active products on your store and syncs a list type product reference metafield to contain all products with a matching common single metafield value (the 'group by' meatfield).

Optionally you can check the 'Remove out of stock products' to have the task remove out of stock products from the product list field on all shared products. * *Note this option is not compatible with products that do not have tracked inventory.*

Example use cases for this task include showing color variations of a product or showing a related products / shop the look section on a product page.

As a working example if you have the following products on your store:
- Cool Black T-Shirt

- Cool Gray T-Shirt

- Cool White T-Shirt

And then you set the 'group by' metafield value on all three to 'Cool T-Shirt', after this task runs on 'Cool Black T-Shirt' it will have the Gray and White products in the product list metafield and so on.  
If you have the 'Include current product' option checked the Black T-Shirt itself will also be included (useful if you want the product list field to stay the same across products when simulating variant options).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-a-product-list-metafield-of-products-that-share-another-common-metafield-value), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-a-product-list-metafield-of-products-that-share-another-common-metafield-value.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
