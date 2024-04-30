# Auto-delete product metafields older than X days

Tags: Delete, Metafields, Products

Use this task to auto-delete product metafields that are older than the configured minimum age in days. Useful for removing transient metafields a certain number of days after they have been created.

* View in the task library: [tasks.mechanic.dev/auto-delete-product-metafields-older-than-x-days](https://tasks.mechanic.dev/auto-delete-product-metafields-older-than-x-days)
* Task JSON, for direct import: [task.json](../../tasks/auto-delete-product-metafields-older-than-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_metafields_to_monitor__array_required": null,
  "minimum_age_in_days_before_deletion__number_required": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to auto-delete product metafields that are older than the configured minimum age in days. Useful for removing transient metafields a certain number of days after they have been created.

Enter one or more metafields using *namespace.key* format (e.g. "custom.new_arrival" ), and on the daily task run it will find and delete any matching product metafield which was **created at** prior to the cutoff date.

It is highly recommended to first run this task using the *Test mode* option, so it can log out which metafields have qualified for deletion without actually deleting them. Pair this with running the task manually to avoid waiting for the next scheduled task run to see the test mode logging.

**Note:**
The "cutoff date" uses the beginning of the task run day (i.e. midnight local shop time) as the start time to count backwards the configured minimum age in days.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-delete-product-metafields-older-than-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-delete-product-metafields-older-than-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
