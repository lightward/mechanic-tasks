# Temporarily add an order note

Tags: Order Note

This task looks up orders by their order number, adds the note of your choice to the order record, and removes that same note 12 hours later. A bespoke task for a very specific merchant need, we publish this task as an example of getting creative with Mechanic. :)

* View in the task library: [tasks.mechanic.dev/temporarily-add-an-order-note](https://tasks.mechanic.dev/temporarily-add-an-order-note)
* Task JSON, for direct import: [task.json](../../tasks/temporarily-add-an-order-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "hours_to_wait__number_required": 12,
  "order_note_to_add__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/text
user/orders/remove_note
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task looks up orders by their order number, adds the note of your choice to the order record, and removes that same note 12 hours later. A bespoke task for a very specific merchant need, we publish this task as an example of getting creative with Mechanic. :)

Run this task manually, and enter one or more order numbers (one per line, making sure to use the exact order number - including symbols and prefixes/suffixes. Mechanic will add the note you configure to the corresponding order, and remove it 12 hours later.

Mechanic will preserve any existing notes on file for these orders, appending the new note content to the end of the content already in place.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/temporarily-add-an-order-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/temporarily-add-an-order-note.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
