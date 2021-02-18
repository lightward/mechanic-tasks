# Sync an inverse product tag

Shopify's product collection filters allow you to filter by the tags the product contains – but not the tags a product does not contain. Use this task to sync an "inverse" tag to all products who do not have a particular tag, allowing you to create collections in Shopify that use the inverse tag.

* View in the task library: [usemechanic.com/task/sync-an-inverse-product-tag](https://usemechanic.com/task/sync-an-inverse-product-tag)
* Task JSON, for direct import: [task.json](../../tasks/sync-an-inverse-product-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tag_to_watch__required": "wholesale",
  "product_tag_to_use_when_missing__required": "retail"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Shopify's product collection filters allow you to filter by the tags the product contains – but not the tags a product does not contain. Use this task to sync an "inverse" tag to all products who do not have a particular tag, allowing you to create collections in Shopify that use the inverse tag.

To explain by example, if you've already tagged your wholesale products with "wholesale", configure the "Product tag to watch" option with "wholesale", and the "Product tag to use when missing" option with "retail". This task will automatically tag all non-wholesale products with "retail", and automatically remove that tag from any products who later receive the tag "wholesale". Please note: if you remove the "retail" tag, this task will simply re-add it. To remove the "retail" tag, you would need to _add_ the "wholesale" tag to that product.

Run this task manually to scan all of the products in your store. Otherwise, this task will monitor and sync tags for all new and updated products, as they come through.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/sync-an-inverse-product-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-an-inverse-product-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
