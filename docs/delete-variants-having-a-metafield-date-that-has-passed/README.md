# Delete variants having a metafield date that has passed

Tags: Delete, Metafields, Schedule

Do you sell tickets to recurring events? Do you use a new product variant for each one? Use this task to regularly scan your catalog for product variants that have a date metafield, and to delete variants when their date has passed.

* View in the task library: [usemechanic.com/task/delete-variants-having-a-metafield-date-that-has-passed](https://usemechanic.com/task/delete-variants-having-a-metafield-date-that-has-passed)
* Task JSON, for direct import: [task.json](../../tasks/delete-variants-having-a-metafield-date-that-has-passed.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "date_metafield_namespace__required": null,
  "date_metafield_key__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Do you sell tickets to recurring events? Do you use a new product variant for each one? Use this task to regularly scan your catalog for product variants that have a date metafield, and to delete variants when their date has passed.

Run this task manually to immediately scan your product catalog for outdated variants, and delete them. This task will also run nightly, at midnight in your store's timezone.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/delete-variants-having-a-metafield-date-that-has-passed), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-variants-having-a-metafield-date-that-has-passed.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
