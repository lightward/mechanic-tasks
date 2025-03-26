# Delete expired discounts after X days

Tags: Bulk, Delete, Discounts

Use this task to automatially keep your Discounts list clean by deleting any that have been expired for a configurable amount of days. Choose whether to delete automatic or code discounts, or both. Optionally, limit the deletions to discounts created by specific apps.

* View in the task library: [tasks.mechanic.dev/delete-expired-discounts-after-x-days](https://tasks.mechanic.dev/delete-expired-discounts-after-x-days)
* Task JSON, for direct import: [task.json](../../tasks/delete-expired-discounts-after-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_after_expiration_to_delete__number_required": "7",
  "delete_automatic_discounts__boolean": false,
  "delete_code_discounts__boolean": true,
  "only_delete_discounts_created_by_these_apps__array": null
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

Use this task to automatially keep your Discounts list clean by deleting any that have been expired for a configurable amount of days. Choose whether to delete automatic or code discounts, or both. Optionally, limit the deletions to discounts created by specific apps.

This task will run every night, and may also be run manually.

**Notes:**
- If limiting deletions to certain apps, the configured values must match app names exactly (e.g. "Shopify Web")
- This task cannot delete discounts created for use in Shopify Functions

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-expired-discounts-after-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-expired-discounts-after-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
