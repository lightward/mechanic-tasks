# Auto-tag customers when they purchase a matching product

Configure this task with search terms that describe certain products, and this task will apply the tags of your choice to every customer who purchases a matching product or product variant. Run this task manually to tag all customers who have a qualifying order already on file.

* View in the task library: [usemechanic.com/task/auto-tag-customers-upon-product-purchase](https://usemechanic.com/task/auto-tag-customers-upon-product-purchase)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-upon-product-purchase.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "search_query__required": "sku:ABC123",
  "search_for_products__boolean": false,
  "search_for_product_variants__boolean": true,
  "customer_tags_to_apply__required_array": [],
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

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

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-upon-product-purchase), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-upon-product-purchase.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
