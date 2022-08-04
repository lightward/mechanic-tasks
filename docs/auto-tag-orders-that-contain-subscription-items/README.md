# Auto-tag orders that contain subscription items

Tags: Auto-Tag, Orders, Products, Subscriptions

Use this task to tag incoming orders that contain subscription items. This task can also be run manually to scan and tag historical orders. 

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-that-contain-subscription-items](https://tasks.mechanic.dev/auto-tag-orders-that-contain-subscription-items)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-contain-subscription-items.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_apply__required": "subscription order"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag incoming orders that contain subscription items. This task can also be run manually to scan and tag historical orders. 

This tasks looks for items that have a selling plan, e.g. "Subscription, Delivery every month". You can learn more about Selling plans [here](https://shopify.dev/api/admin-graphql/2022-01/objects/sellingplan).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-that-contain-subscription-items), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-contain-subscription-items.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
