# Auto-pay orders having a certain tag

Tags: Orders, Payment, Tag, Watch

Use this task to quickly designate certain orders to be automatically marked as paid. Runs for orders as they're created and updated, and can also be run manually, to scan all orders in your store at once.

* View in the task library: [usemechanic.com/task/auto-pay-orders-having-a-certain-tag](https://usemechanic.com/task/auto-pay-orders-having-a-certain-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-pay-orders-having-a-certain-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_order_tag__required": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to quickly designate certain orders to be automatically marked as paid. Runs for orders as they're created and updated, and can also be run manually, to scan all orders in your store at once.

When running manually, use test mode first to ensure that you'll receive the results you expect. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-pay-orders-having-a-certain-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-pay-orders-having-a-certain-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
