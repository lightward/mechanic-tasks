# Delete draft orders

Tags: Delete, Draft Orders

Use this task to clear out your draft orders, on demand. Filter by draft order status (open, invoice sent, closed), or by draft order tags.

* View in the task library: [tasks.mechanic.dev/delete-draft-orders](https://tasks.mechanic.dev/delete-draft-orders)
* Task JSON, for direct import: [task.json](../../tasks/delete-draft-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_open_draft_orders__boolean": false,
  "include_invoice_sent_draft_orders__boolean": false,
  "include_closed_draft_orders__boolean": false,
  "only_delete_draft_orders_having_this_tag": null,
  "ignore_draft_orders_having_this_tag": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to clear out your draft orders, on demand. Filter by draft order status (open, invoice sent, closed), or by draft order tags.

**Important: Be sure to configure this task before running!** You may filter by draft order status (open, invoice sent, or closed), and by draft order tag (to selectively delete, or to selectively ignore).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-draft-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
