# Auto-capture order payment after x days

Tags: Payment, Schedule

After waiting 7 days (or another timespan of your choice), this task attempts to capture all open authorized payments for an order. (Multiple authorizations can exist on edited orders or with post-purchase upsells.)

* View in the task library: [tasks.mechanic.dev/auto-capture-order-payment-after-x-days](https://tasks.mechanic.dev/auto-capture-order-payment-after-x-days)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-order-payment-after-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_before_capturing__number_required": "7"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create+{{ options.days_to_wait_before_capturing__number_required | default: 7 }}.days
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

After waiting 7 days (or another timespan of your choice), this task attempts to capture all open authorized payments for an order. (Multiple authorizations can exist on edited orders or with post-purchase upsells.)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-capture-order-payment-after-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-order-payment-after-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
