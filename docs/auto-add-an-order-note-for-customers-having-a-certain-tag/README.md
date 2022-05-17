# Auto-add an order note for customers having a certain tag

Tags: Customers, Order Note, Orders

This task monitors newly-created orders, and appends an order note if the customer has a certain tag. Useful for identifying orders for a particular customer group, and adding fulfillment notes as appropriate.

* View in the task library: [tasks.mechanic.dev/auto-add-an-order-note-for-customers-having-a-certain-tag](https://tasks.mechanic.dev/auto-add-an-order-note-for-customers-having-a-certain-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-an-order-note-for-customers-having-a-certain-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_note_to_add__required_multiline": "",
  "required_customer_tag__required": ""
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors newly-created orders, and appends an order note if the customer has a certain tag. Useful for identifying orders for a particular customer group, and adding fulfillment notes as appropriate.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-an-order-note-for-customers-having-a-certain-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-an-order-note-for-customers-having-a-certain-tag.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
