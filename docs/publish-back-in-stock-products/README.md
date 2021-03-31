# Publish back-in-stock products

Tags: Inventory, Products, Publish

Whenever inventory for a product is updated, this task compares its available inventory against your "back in stock" threshold. If the product is to be considered back in stock, this task will make sure it's published to the sales channels of your choice. Optionally, it'll send you an email when it publishes your product.

* View in the task library: [usemechanic.com/task/publish-back-in-stock-products](https://usemechanic.com/task/publish-back-in-stock-products)
* Task JSON, for direct import: [task.json](../../tasks/publish-back-in-stock-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names__required_array": null,
  "email_notification_recipient__email": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Whenever inventory for a product is updated, this task compares its available inventory against your "back in stock" threshold. If the product is to be considered back in stock, this task will make sure it's published to the sales channels of your choice. Optionally, it'll send you an email when it publishes your product.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/publish-back-in-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/publish-back-in-stock-products.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
