# Unpublish a certain collection, daily

Tags: Collections, Schedule, Unpublish

Use this task with the companion publishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

* View in the task library: [tasks.mechanic.dev/unpublish-a-certain-collection-daily](https://tasks.mechanic.dev/unpublish-a-certain-collection-daily)
* Task JSON, for direct import: [task.json](../../tasks/unpublish-a-certain-collection-daily.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_id__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/monday+18.hours
mechanic/scheduler/tuesday+18.hours
mechanic/scheduler/wednesday+18.hours
mechanic/scheduler/thursday+18.hours
mechanic/scheduler/friday+18.hours
mechanic/scheduler/saturday+14.hours
mechanic/scheduler/sunday+14.hours
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with the companion publishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

For best results, pair this task with [Publish a certain collection, daily](https://tasks.mechanic.dev/publish-a-certain-collection-daily), from our task library.

To configure this task, enter the "Collection ID" for the collection you wish to unpublish. Refer to this [article](https://learn.mechanic.dev/techniques/finding-a-resource-id) for assistance on finding Shopify resource IDs.

Out of the box, this task will unpublish everything in this collection at 6pm on weekdays, and 2pm on weekends. To adjust this, switch to "Advanced mode", and tweak the "Subscriptions" setting to taste. Each line represents midnight in your shop's local timezone, plus whatever number of offset hours you prefer. For example, `mechanic/scheduler/tuesday+13.hours` would mean Tuesday at 1pm.

**Note:** This task only unpublishes products from the 'Online Store'.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/unpublish-a-certain-collection-daily), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-a-certain-collection-daily.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
