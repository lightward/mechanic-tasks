# Auto-add an order note for customers having a certain tag

Tags: Customers, Order Note, Orders

This task monitors newly-created orders, and appends an order note if the customer has a certain tag. Useful for identifying orders for a particular customer group, and adding fulfillment notes as appropriate.

* View in the task library: [usemechanic.com/task/auto-add-an-order-note-for-customers-having-a-certain-tag](https://usemechanic.com/task/auto-add-an-order-note-for-customers-having-a-certain-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-an-order-note-for-customers-having-a-certain-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_note_to_add__required_multiline": "",
  "required_customer_tag__required": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors newly-created orders, and appends an order note if the customer has a certain tag. Useful for identifying orders for a particular customer group, and adding fulfillment notes as appropriate.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-add-an-order-note-for-customers-having-a-certain-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-an-order-note-for-customers-having-a-certain-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
