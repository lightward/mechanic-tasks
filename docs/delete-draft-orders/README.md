# Delete draft orders

Use this task to clear out your draft orders, on demand. Filter by draft order status (open, invoice sent, closed), or by draft order tags.

* View in the task library: [usemechanic.com/task/delete-draft-orders](https://usemechanic.com/task/delete-draft-orders)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to clear out your draft orders, on demand. Filter by draft order status (open, invoice sent, closed), or by draft order tags.

**Important: Be sure to configure this task before running!** You may filter by draft order status (open, invoice sent, or closed), and by draft order tag (to selectively delete, or to selectively ignore).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/delete-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-draft-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
