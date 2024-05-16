# Get email alerts for out of stock products

Tags: Alert, Email, Out of Stock

Use this task to keep you and your team updated when products go out of stock - and, optionally, when they go back in stock. Filter with a simple product search to only track products you care about. Choose a custom stock threshold to get a heads up before the stock level reaches zero.

* View in the task library: [tasks.mechanic.dev/get-email-alerts-for-out-of-stock-products](https://tasks.mechanic.dev/get-email-alerts-for-out-of-stock-products)
* Task JSON, for direct import: [task.json](../../tasks/get-email-alerts-for-out-of-stock-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "out_of_stock_inventory_quantity__number_required": "10",
  "only_monitor_products_matching_this_search_query": "shirt",
  "send_email_for_out_of_stock_products__boolean": true,
  "send_email_for_back_in_stock_products__boolean": true,
  "stock_update_email_recipients__email_array_required": []
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

Use this task to keep you and your team updated when products go out of stock - and, optionally, when they go back in stock. Filter with a simple product search to only track products you care about. Choose a custom stock threshold to get a heads up before the stock level reaches zero.

Run this task manually to scan all products up front. While this task normally remembers which products were out (or in) stock, running this task manually will always result in an email summary of out of stock products.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/get-email-alerts-for-out-of-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/get-email-alerts-for-out-of-stock-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
