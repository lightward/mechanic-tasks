# Auto-copy order notes to the customer's note

Tags: Customer Notes, Order Note, Sync

This task appends order notes to the related customer's note, whenever the order note changes.

* View in the task library: [usemechanic.com/task/auto-copy-order-notes-to-the-customers-note](https://usemechanic.com/task/auto-copy-order-notes-to-the-customers-note)
* Task JSON, for direct import: [task.json](../../tasks/auto-copy-order-notes-to-the-customers-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "note_prefix": "Order {{ order.name }}: "
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task appends order notes to the related customer's note, whenever the order note changes.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-copy-order-notes-to-the-customers-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-copy-order-notes-to-the-customers-note.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
