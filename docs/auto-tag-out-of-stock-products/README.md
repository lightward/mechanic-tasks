# Auto-tag out-of-stock products

Tags: Auto-Tag, Inventory, Out of Stock, Products

Does what it says on the tin. :) Optionally, emails you an alert when a product goes out of stock.

* View in the task library: [tasks.mechanic.dev/auto-tag-out-of-stock-products](https://tasks.mechanic.dev/auto-tag-out-of-stock-products)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Does what it says on the tin. :) Optionally, emails you an alert when a product goes out of stock.

Run this task manually to scan and tag all products in your store, according to their respective total inventory levels. Fill in the email alert recipient to send an email alert when a product goes out of stock.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-out-of-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-out-of-stock-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
