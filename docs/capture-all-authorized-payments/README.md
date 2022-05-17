# Capture all authorized payments

Tags: Payment

This task will scan for all orders that have a financial status of "authorized", and will capture payment for them. This task can be scheduled to run daily, and can be run on demand.

* View in the task library: [tasks.mechanic.dev/capture-all-authorized-payments](https://tasks.mechanic.dev/capture-all-authorized-payments)
* Task JSON, for direct import: [task.json](../../tasks/capture-all-authorized-payments.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_partially_paid_orders__boolean": false,
  "run_daily__boolean": false,
  "hours_to_wait_after_midnight_when_running_daily__number": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% if options.hours_to_wait_after_midnight_when_running_daily__number %}+{{ options.hours_to_wait_after_midnight_when_running_daily__number | times: 60 | round }}.minutes{% endif %}{% endif %}
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will scan for all orders that have a financial status of "authorized", and will capture payment for them. This task can be scheduled to run daily, and can be run on demand.

This task will scan for all orders that have a financial status of "authorized", and will capture payment for them. Enable "Run daily" to perform this every day at midnight, or use the "Run task" button to perform this scan on demand.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/capture-all-authorized-payments), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/capture-all-authorized-payments.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
