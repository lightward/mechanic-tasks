# Auto-fulfill orders when tagged

Tags: Fulfillment, Orders, Tag

This task monitors order tags, and when a certain tag is added to an order, it auto-fulfills all unfulfilled items in the order. Optionally, you can choose to notify customers when their order is fulfilled by this task.

* View in the task library: [usemechanic.com/task/auto-fulfill-orders-when-tagged](https://usemechanic.com/task/auto-fulfill-orders-when-tagged)
* Task JSON, for direct import: [task.json](../../tasks/auto-fulfill-orders-when-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_watch_for__required": null,
  "ignore_if_this_order_tag_is_found": null,
  "notify_customer_on_fulfillment__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors order tags, and when a certain tag is added to an order, it auto-fulfills all unfulfilled items in the order. Optionally, you can choose to notify customers when their order is fulfilled by this task.

__Note__: If a qualifying order has open fulfillments assigned to multiple locations when this task fulfills the order, then the customer will receive multiple notifications if that option is enabled in the task.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-fulfill-orders-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-fulfill-orders-when-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
