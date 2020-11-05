# Get email alerts for out of stock products

Use this task to keep you and your team updated when products go out of stock - and, optionally, when they go back in stock. Filter with a simple product search to only track products you care about. Choose a custom stock threshold to get a heads up before the stock level reaches zero.

* View in the task library: [usemechanic.com/task/get-email-alerts-for-out-of-stock-products](https://usemechanic.com/task/get-email-alerts-for-out-of-stock-products)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to keep you and your team updated when products go out of stock - and, optionally, when they go back in stock. Filter with a simple product search to only track products you care about. Choose a custom stock threshold to get a heads up before the stock level reaches zero.

Configure this task to receive email alerts when products go out of stock, for the threshold of your choice, optionally applying a specific product search.

Run this task manually to scan all products up front. While this task normally remembers which products were out (or in) stock, running this task manually will always result in an email summary of out of stock products.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/get-email-alerts-for-out-of-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/get-email-alerts-for-out-of-stock-products.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
