# Delete draft orders older than 30 days

Tags: Delete, Draft Orders, Schedule

Keep your draft order list tidy - use this task to automatically delete orders that are older than a configurable number of days.

* View in the task library: [tasks.mechanic.dev/delete-draft-orders-older-than-30-days](https://tasks.mechanic.dev/delete-draft-orders-older-than-30-days)
* Task JSON, for direct import: [task.json](../../tasks/delete-draft-orders-older-than-30-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_before_deleting_a_draft_order__number_required": "30",
  "test_mode__boolean": true,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Keep your draft order list tidy - use this task to automatically delete orders that are older than a configurable number of days.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-draft-orders-older-than-30-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-draft-orders-older-than-30-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
