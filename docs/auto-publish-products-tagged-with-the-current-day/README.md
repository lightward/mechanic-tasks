# Auto-publish products tagged with the current day

Tags: Products, Publish, Tag, Watch

Use this task to automatically roll out your products on specific days of the week. This task runs every midnight, in your shop's local timezone, and it scans your catalog for unpublished products tagged with the current day of the week (e.g. "Monday", "tuesday", etc).

* View in the task library: [tasks.mechanic.dev/auto-publish-products-tagged-with-the-current-day](https://tasks.mechanic.dev/auto-publish-products-tagged-with-the-current-day)
* Task JSON, for direct import: [task.json](../../tasks/auto-publish-products-tagged-with-the-current-day.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically roll out your products on specific days of the week. This task runs every midnight, in your shop's local timezone, and it scans your catalog for unpublished products tagged with the current day of the week (e.g. "Monday", "tuesday", etc).

This task runs every midnight, in your shop's local timezone, and it scans your catalog for unpublished products tagged with the current day of the week (e.g. "Monday", "tuesday", etc).

You can also run this task manually, to publish any unpublished products tagged with the current day of the week.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-publish-products-tagged-with-the-current-day), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-publish-products-tagged-with-the-current-day.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
