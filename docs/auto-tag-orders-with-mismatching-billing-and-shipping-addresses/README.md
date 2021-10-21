# Auto-tag orders with mismatching billing and shipping addresses

Tags: Address, Auto-Tag, Risk, Shipping

Useful for flagging orders for manual follow-up, for stores that see fraudulent activity in which billing and shipping address are not the same.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-mismatching-billing-and-shipping-addresses](https://usemechanic.com/task/auto-tag-orders-with-mismatching-billing-and-shipping-addresses)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-mismatching-billing-and-shipping-addresses.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_add__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful for flagging orders for manual follow-up, for stores that see fraudulent activity in which billing and shipping address are not the same.

This task auto-tags orders, as they're created, if their billing and shipping addresses do not match. It ignores orders that do not have a billing address, or that do not have a shipping address.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-mismatching-billing-and-shipping-addresses), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-mismatching-billing-and-shipping-addresses.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
