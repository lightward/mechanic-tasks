# Sync an inverse order tag

Tags: Auto-Tag, Orders, Sync

Shopify's order group filters allow you to filter by the tags the order contains – but not the tags a order does not contain. Use this task to sync an "inverse" tag to all orders who do not have a particular tag, allowing you to filter orders in Shopify by that inverse tag.

* View in the task library: [usemechanic.com/task/sync-an-inverse-order-tag](https://usemechanic.com/task/sync-an-inverse-order-tag)
* Task JSON, for direct import: [task.json](../../tasks/sync-an-inverse-order-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_watch__required": "wholesale",
  "order_tag_to_use_when_missing__required": "retail"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Shopify's order group filters allow you to filter by the tags the order contains – but not the tags a order does not contain. Use this task to sync an "inverse" tag to all orders who do not have a particular tag, allowing you to filter orders in Shopify by that inverse tag.

To explain by example, if you've already tagged your wholesale orders with "wholesale", configure the "order tag to watch" option with "wholesale", and the "order tag to use when missing" option with "retail". This task will automatically tag all non-wholesale orders with "retail", and automatically remove that tag from any orders who later receive the tag "wholesale". Please note: if you remove the "retail" tag, this task will simply re-add it. To remove the "retail" tag, you would need to _add_ the "wholesale" tag to that order.

Run this task manually to scan all of the orders in your store. Otherwise, this task will monitor and sync tags for all new and updated orders, as they come through.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/sync-an-inverse-order-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-an-inverse-order-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
