# Auto-tag orders by sales channel

Tags: Sales Channel, Orders, Auto-Tag

Use this task to tag orders as they come in, based on which sales channel created them. Run this task manually to backfill tags for customers based on their historical orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-sales-channel](https://usemechanic.com/task/auto-tag-orders-by-sales-channel)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-sales-channel.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names_and_tags__keyval_required": {
    "Online Store": "online-store",
    "Buy Button": "buy-button"
  }
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

Use this task to tag orders as they come in, based on which sales channel created them. Run this task manually to backfill tags for customers based on their historical orders.

Please note: this task works by *sales channel*, and as such does not apply to orders that are created by an *app*. It's sometimes difficult to distinguish whether a third-party is using a sales channel or an app; if you're having trouble with this task, try its companion, [Auto-tag orders by app](https://usemechanic.com/task/auto-tag-orders-by-app).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-sales-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-sales-channel.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
