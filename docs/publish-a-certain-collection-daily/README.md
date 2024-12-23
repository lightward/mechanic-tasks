# Publish a certain collection, daily

Tags: Collections, Publish, Schedule

Use this task with the companion unpublishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

* View in the task library: [tasks.mechanic.dev/publish-a-certain-collection-daily](https://tasks.mechanic.dev/publish-a-certain-collection-daily)
* Task JSON, for direct import: [task.json](../../tasks/publish-a-certain-collection-daily.json)
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
mechanic/scheduler/monday+9.hours
mechanic/scheduler/tuesday+9.hours
mechanic/scheduler/wednesday+9.hours
mechanic/scheduler/thursday+9.hours
mechanic/scheduler/friday+9.hours
mechanic/scheduler/saturday+10.hours
mechanic/scheduler/sunday+10.hours
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with the companion unpublishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

For best results, pair this task with [Unpublish a certain collection, daily](https://tasks.mechanic.dev/unpublish-a-certain-collection-daily), from our task library.

To configure this task, enter the "Collection ID" for the collection you wish to publish. Refer to this [article](https://learn.mechanic.dev/techniques/finding-a-resource-id) for assistance on finding Shopify resource IDs.

Out of the box, this task will publish everything in this collection at 9am on weekdays, and 10am on weekends. To adjust this, click the "Show Advanced" link, and tweak the "Subscriptions" setting to taste. Each line represents midnight in your shop's local timezone, plus whatever number of hours you prefer. For example, `mechanic/scheduler/tuesday+13.hours` would mean Tuesday at 1pm.

**Note:** This task only publishes products to the 'Online Store'.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/publish-a-certain-collection-daily), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/publish-a-certain-collection-daily.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
