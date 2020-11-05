# Auto-tag new orders with a value from the customer note

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz". Useful with apps like inkFrog, which add eBay usernames to customer notes, using a prefix.

* View in the task library: [usemechanic.com/task/auto-tag-new-orders-with-a-value-from-the-customer-note](https://usemechanic.com/task/auto-tag-new-orders-with-a-value-from-the-customer-note)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-with-a-value-from-the-customer-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_prefix_in_customer_note__required": "eBay User:"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz". Useful with apps like inkFrog, which add eBay usernames to customer notes, using a prefix.

This task watches incoming orders, and tags each order with a certain value from the customer's note, as identified by a configurable prefix. For example, if your customers have notes resembling "Username: xyz", configure this task with the prefix "Username: " to have it tag incoming orders as "xyz".

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-orders-with-a-value-from-the-customer-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-with-a-value-from-the-customer-note.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
