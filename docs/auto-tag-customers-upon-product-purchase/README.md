# Auto-tag customers when they purchase a matching product

Tags: Auto-Tag, Customers, Orders, Products

Configure this task with search terms that describe certain products, and this task will apply the tags of your choice to every customer who purchases a matching product or product variant. Run this task manually to tag all customers who have a qualifying order already on file.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-upon-product-purchase](https://tasks.mechanic.dev/auto-tag-customers-upon-product-purchase)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-upon-product-purchase.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "search_query__required": "sku:ABC123",
  "search_for__choice_o1_products_o2_variants_required": "variants",
  "customer_tags_to_apply__required_array": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Configure this task with search terms that describe certain products, and this task will apply the tags of your choice to every customer who purchases a matching product or product variant. Run this task manually to tag all customers who have a qualifying order already on file.

This task auto-tags customers who have paid orders on file for products or product variants that match the search query you add.

Sample searches:

* A specific SKU: search product variants for `sku:ABC123`
* All products with a certain tag: search products for `tag:holiday`
* All products with a certain type: search products for `product_type:"Gift Card"`
* A product with a certain title: search products for `title:"Short sleeve t-shirt"`

To ensure expected results, use this task with test mode enabled, before disabling test mode.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-upon-product-purchase), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-upon-product-purchase.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
