# Auto-tag cancelled orders

This task watches for order cancellations, and adds or removes tags according to your preference. Run this task manually to update tags for existing cancelled orders.

* View in the task library: [usemechanic.com/task/auto-tag-cancelled-orders](https://usemechanic.com/task/auto-tag-cancelled-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-cancelled-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_to_add__array": [
    "cancelled"
  ],
  "tags_to_remove__array": null
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

This task watches for order cancellations, and adds or removes tags according to your preference. Run this task manually to update tags for existing cancelled orders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-cancelled-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-cancelled-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
