# Auto-tag new orders with a value from the customer note

Tags: Auto-Tag, Customer Notes, Customers, Orders

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz". Useful with apps like inkFrog, which add eBay usernames to customer notes, using a prefix.

* View in the task library: [tasks.mechanic.dev/auto-tag-new-orders-with-a-value-from-the-customer-note](https://tasks.mechanic.dev/auto-tag-new-orders-with-a-value-from-the-customer-note)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-with-a-value-from-the-customer-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_prefix_in_customer_note__required": "eBay User:"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz". Useful with apps like inkFrog, which add eBay usernames to customer notes, using a prefix.

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz".

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-new-orders-with-a-value-from-the-customer-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-with-a-value-from-the-customer-note.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
