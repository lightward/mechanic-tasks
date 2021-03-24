# Auto-capture order payment after x days

Tags: Schedule, Payment

Short and simple. Captures order payment for un-cancelled orders that have a financial status of "authorized", after waiting 30 days (or another timespan of your choice).

* View in the task library: [usemechanic.com/task/auto-capture-order-payment-after-30-days](https://usemechanic.com/task/auto-capture-order-payment-after-30-days)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-order-payment-after-30-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_before_capturing__number_required": 30
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create+{{ options.days_to_wait_before_capturing__number_required | default: 30 }}.days
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Short and simple. Captures order payment for un-cancelled orders that have a financial status of "authorized", after waiting 30 days (or another timespan of your choice).

This task captures order payment for un-cancelled orders that have a financial status of "authorized", after waiting 30 days (or another timespan of your choice).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-capture-order-payment-after-30-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-order-payment-after-30-days.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
