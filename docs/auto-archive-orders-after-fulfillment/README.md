# Auto-archive orders after fulfillment

Tags: Archive, Fulfillment, Orders

Just as it says. :) Archives orders immediately upon fulfillment, or after a configurable number of days.

* View in the task library: [usemechanic.com/task/auto-archive-orders-after-fulfillment](https://usemechanic.com/task/auto-archive-orders-after-fulfillment)
* Task JSON, for direct import: [task.json](../../tasks/auto-archive-orders-after-fulfillment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_after_fulfillment_before_archiving__number": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/fulfilled{% if options.days_to_wait_after_fulfillment_before_archiving__number %}+{{ options.days_to_wait_after_fulfillment_before_archiving__number }}.days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Just as it says. :) Archives orders immediately upon fulfillment, or after a configurable number of days.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-archive-orders-after-fulfillment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-archive-orders-after-fulfillment.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
