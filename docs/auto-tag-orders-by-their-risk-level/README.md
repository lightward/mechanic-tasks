# Auto-tag orders by their risk level

Tags: Auto-Tag, Orders, Risk

This task applies the tag of your choice to incoming orders, based on the risk level determined for the order. Run this task manually to tag all orders in your store's records, according to their respective risk levels. Combine this task with an email task, to email customers when their order is flagged.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-their-risk-level](https://usemechanic.com/task/auto-tag-orders-by-their-risk-level)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-their-risk-level.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "risk_levels_and_tags__keyval_required": {
    "Low": "low-risk",
    "Medium": "medium-risk",
    "High": "high-risk"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task applies the tag of your choice to incoming orders, based on the risk level determined for the order. Run this task manually to tag all orders in your store's records, according to their respective risk levels. Combine this task with an email task, to email customers when their order is flagged.

This task applies the tag of your choice to incoming orders, based on the risk level determined for the order.

Run this task manually to tag all orders in your store's records, according to their respective risk levels.

Combine this task with ["Email customers when their order is tagged"](https://usemechanic.com/task/email-customer-when-order-tagged) to alert customers when their order is flagged.

Feel free to remove a tag from this task's options, if you don't need it. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-their-risk-level), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-their-risk-level.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
