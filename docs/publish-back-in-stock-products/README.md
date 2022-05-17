# Publish back-in-stock products

Tags: Inventory, Products, Publish

Whenever inventory for a product is updated, this task compares its available inventory against your "back in stock" threshold. If the product is to be considered back in stock, this task will make sure it's published to the sales channels of your choice. Optionally, it'll send you an email when it publishes your product.

* View in the task library: [tasks.mechanic.dev/publish-back-in-stock-products](https://tasks.mechanic.dev/publish-back-in-stock-products)
* Task JSON, for direct import: [task.json](../../tasks/publish-back-in-stock-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names__required_array": null,
  "email_notification_recipient__email": ""
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Whenever inventory for a product is updated, this task compares its available inventory against your "back in stock" threshold. If the product is to be considered back in stock, this task will make sure it's published to the sales channels of your choice. Optionally, it'll send you an email when it publishes your product.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/publish-back-in-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/publish-back-in-stock-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
