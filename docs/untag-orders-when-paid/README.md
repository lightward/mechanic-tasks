# Untag orders when paid

Tags: Orders, Payment, Untag

This task automatically removes specific order tag(s) when orders are paid.

* View in the task library: [usemechanic.com/task/untag-orders-when-paid](https://usemechanic.com/task/untag-orders-when-paid)
* Task JSON, for direct import: [task.json](../../tasks/untag-orders-when-paid.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tags_to_remove__array": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task automatically removes specific order tag(s) when orders are paid.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/untag-orders-when-paid), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/untag-orders-when-paid.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
