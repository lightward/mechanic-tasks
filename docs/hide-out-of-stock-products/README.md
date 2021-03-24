# Hide out-of-stock products

Tags: Out of Stock, Products, Unpublish

This task monitors inventory updates, and pulls the product from the selected sales channels whenever a product's total inventory meets your "out of stock" threshold. Optionally, it'll send you an email when it does so. This task can also be run manually, to scan all products at once.

* View in the task library: [usemechanic.com/task/hide-out-of-stock-products](https://usemechanic.com/task/hide-out-of-stock-products)
* Task JSON, for direct import: [task.json](../../tasks/hide-out-of-stock-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "email_notification_recipient__email": "",
  "out_of_stock_inventory_quantity__number_required": "0"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors inventory updates, and pulls the product from the selected sales channels whenever a product's total inventory meets your "out of stock" threshold. Optionally, it'll send you an email when it does so. This task can also be run manually, to scan all products at once.

This task monitors inventory updates, and pulls the product from the selected sales channels whenever a product's total inventory meets your "out of stock" threshold.

To scan your entire catalog for out of stock products, use the "Run task" button. Otherwise, this task will run whenever an inventory level is updated.

If you'd like to wait until the product has been out of stock for several days, use this task instead: [Unpublish products that have been out of stock for x days](https://usemechanic.com/task/unpublish-products-that-have-been-out-of-stock-for-x-days).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/hide-out-of-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/hide-out-of-stock-products.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
