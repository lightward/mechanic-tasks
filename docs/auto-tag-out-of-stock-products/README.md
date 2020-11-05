# Auto-tag out-of-stock products

Does what it says on the tin. :) Optionally, emails you an alert when a product goes out of stock.

* View in the task library: [usemechanic.com/task/auto-tag-out-of-stock-products](https://usemechanic.com/task/auto-tag-out-of-stock-products)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-out-of-stock-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "out_of_stock_inventory_level__number_required": 0,
  "product_tag__required": "out-of-stock",
  "email_alert_recipient__email": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Does what it says on the tin. :) Optionally, emails you an alert when a product goes out of stock.

Run this task manually to scan and tag all products in your store, according to their respective total inventory levels. Fill in the email alert recipient to send an email alert when a product goes out of stock.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-out-of-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-out-of-stock-products.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
