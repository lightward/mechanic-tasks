# Auto-tag customers by sales channel

Use this task to tag customers, as their orders come in, based on which sales channel they used for their purchase. Run this task manually to backfill tags for customers based on their historical orders. Use test mode to see what this task _would_ do, if test mode wasn't enabled. :)

* View in the task library: [usemechanic.com/task/auto-tag-customers-by-sales-channel](https://usemechanic.com/task/auto-tag-customers-by-sales-channel)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-by-sales-channel.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names_and_tags__keyval_required": {
    "Online Store": "online-customer",
    "Buy Button": "buy-button-customer"
  },
  "test_mode__boolean": true
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

Use this task to tag customers, as their orders come in, based on which sales channel they used for their purchase. Run this task manually to backfill tags for customers based on their historical orders. Use test mode to see what this task _would_ do, if test mode wasn't enabled. :)

[YouTube: Watch the development video!](https://youtu.be/TN13-eX1ops)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-by-sales-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-by-sales-channel.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
