# Scheduled theme publishing

Tags: Publish, Schedule

This task will allow you to schedule any number of themes to be published at future dates and times. When the task runs at its normally scheduled 10 minute interval, it will find the entry with the most recent configured date in the past, and if that theme is not currently published, then the task will publish it.

* View in the task library: [tasks.mechanic.dev/scheduled-theme-publishing](https://tasks.mechanic.dev/scheduled-theme-publishing)
* Task JSON, for direct import: [task.json](../../tasks/scheduled-theme-publishing.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "theme_ids_and_publish_dates__keyval": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/10min
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will allow you to schedule any number of themes to be published at future dates and times. When the task runs at its normally scheduled 10 minute interval, it will find the entry with the most recent configured date in the past, and if that theme is not currently published, then the task will publish it.

Within the *Theme IDs and publish dates* field, simply configure the theme IDs on the left along with the related publish dates on the right. Publish dates may be entered with a date and time, using a 24-hour clock, in the format **YYYY-MM-DD HH:MM**, or only with a date in the format **YYYY-MM-DD**, in which case the time would default to midnight.

*Important notes:*
- All times are in local shop time.
- The task will attempt to parse the configured dates and times, and will display an error at run time if any of them are unparsable in the expected format.
- While this task is active it may override any manual publishing actions.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/scheduled-theme-publishing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/scheduled-theme-publishing.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
