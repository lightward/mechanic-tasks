# Auto-tag customers by sales channel

Tags: Auto-Tag, Customers, Sales Channel

Use this task to tag customers, as their orders come in, based on which sales channel they used for their purchase. Run this task manually to backfill tags for customers based on their historical orders. Use test mode to see what this task _would_ do, if test mode wasn't enabled.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-by-sales-channel](https://tasks.mechanic.dev/auto-tag-customers-by-sales-channel)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag customers, as their orders come in, based on which sales channel they used for their purchase. Run this task manually to backfill tags for customers based on their historical orders. Use test mode to see what this task _would_ do, if test mode wasn't enabled.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-by-sales-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-by-sales-channel.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
