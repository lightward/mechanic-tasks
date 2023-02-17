# Auto-capture payments when an order is created

Tags: Orders, Payment, Risk

This task runs immediately after an order is created, and captures any authorized transactions. Choose which risk levels to capture for, and optionally choose to filter by order tag.

* View in the task library: [tasks.mechanic.dev/auto-capture-payments-when-an-order-is-created](https://tasks.mechanic.dev/auto-capture-payments-when-an-order-is-created)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-payments-when-an-order-is-created.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minutes_to_wait_before_capturing__number": null,
  "filter_orders_by_this_tag": null,
  "capture_orders_with_a_high_risk_level__boolean": false,
  "capture_orders_with_a_medium_risk_level__boolean": false,
  "capture_orders_with_a_low_risk_level__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create+{{ options.minutes_to_wait_before_capturing__number | at_least: 0 }}.minutes
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs immediately after an order is created, and captures any authorized transactions. Choose which risk levels to capture for, and optionally choose to filter by order tag.

If you have additional apps or tasks informing an order's risk level, increase the "Minutes to wait before capturing" to make sure they have time to contribute their data.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-capture-payments-when-an-order-is-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-payments-when-an-order-is-created.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
