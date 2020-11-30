# Unpublish a certain collection, daily

Use this task with the companion publishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

* View in the task library: [usemechanic.com/task/unpublish-a-certain-collection-daily](https://usemechanic.com/task/unpublish-a-certain-collection-daily)
* Task JSON, for direct import: [task.json](../../tasks/unpublish-a-certain-collection-daily.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_id__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

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

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task with the companion publishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

For best results, pair this task with [Publish a certain collection, daily](https://usemechanic.com/task/publish-a-certain-collection-daily), from our task library.

To configure this task, enter the "Collection ID" for the collection you wish to unpublish. Refer to this [article](https://docs.usemechanic.com/article/360-how-do-i-find-an-id-for-a-product-collection-order-or-something-else) for assistance on finding Shopify object IDs.

Out of the box, this task will unpublish everything in this collection at 6pm on weekdays, and 2pm on weekends. To adjust this, click the "Show Advanced" link, and tweak the "Subscriptions" setting to taste. Each line represents midnight in your shop's local timezone, plus whatever number of hours you prefer. For example, `mechanic/scheduler/tuesday+13.hours` would mean Tuesday at 1pm.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/unpublish-a-certain-collection-daily), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-a-certain-collection-daily.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
