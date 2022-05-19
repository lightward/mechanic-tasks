# Auto-copy order notes to the customer's note

Tags: Customer Notes, Order Note, Sync

This task appends order notes to the related customer's note, whenever the order note changes.

* View in the task library: [tasks.mechanic.dev/auto-copy-order-notes-to-the-customers-note](https://tasks.mechanic.dev/auto-copy-order-notes-to-the-customers-note)
* Task JSON, for direct import: [task.json](../../tasks/auto-copy-order-notes-to-the-customers-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "note_prefix": "Order {{ order.name }}: "
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task appends order notes to the related customer's note, whenever the order note changes.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-copy-order-notes-to-the-customers-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-copy-order-notes-to-the-customers-note.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
