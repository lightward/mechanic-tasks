# Auto-add a note for new orders having a certain tag

Tags: Order Note, Orders

This task monitors newly-created orders, and appends an order note if that order was created with a certain tag.

* View in the task library: [tasks.mechanic.dev/auto-add-order-note-for-new-tagged-orders](https://tasks.mechanic.dev/auto-add-order-note-for-new-tagged-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-order-note-for-new-tagged-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_order_tag__required": "foo",
  "order_note_to_add__required_multiline": "bar"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors newly-created orders, and appends an order note if that order was created with a certain tag.

Note: this task does not monitor order updates, and so tags added later will not add an order note.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-order-note-for-new-tagged-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-order-note-for-new-tagged-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
