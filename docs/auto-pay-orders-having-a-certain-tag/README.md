# Auto-pay orders having a certain tag

Tags: Orders, Payment, Tag, Watch

Use this task to quickly designate certain orders to be automatically marked as paid. Runs for orders as they're created and updated, and can also be run manually, to scan all orders in your store at once.

* View in the task library: [tasks.mechanic.dev/auto-pay-orders-having-a-certain-tag](https://tasks.mechanic.dev/auto-pay-orders-having-a-certain-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-pay-orders-having-a-certain-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_order_tag__required": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to quickly designate certain orders to be automatically marked as paid. Runs for orders as they're created and updated, and can also be run manually, to scan all orders in your store at once.

When running manually, use test mode first to ensure that you'll receive the results you expect. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-pay-orders-having-a-certain-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-pay-orders-having-a-certain-tag.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
