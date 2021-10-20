# Auto-tag customers by order app

Tags: Auto-Tag, Customers, Orders

This task scans your incoming orders, tagging customers based on the Shopify app responsible for creating each order. Run this task manually to tag your customers based on their historical orders.

* View in the task library: [usemechanic.com/task/auto-tag-customers-by-order-app](https://usemechanic.com/task/auto-tag-customers-by-order-app)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-by-order-app.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "app_titles_and_customer_tags__keyval_required": null,
  "test_mode__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans your incoming orders, tagging customers based on the Shopify app responsible for creating each order. Run this task manually to tag your customers based on their historical orders.

Configure this task with app titles on the left, and customer tags to add on the right.

Use the "Test mode" option to see what the task intends to do, without actually having the task actually make any changes to your customers.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-by-order-app), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-by-order-app.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
