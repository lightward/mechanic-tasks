# Publish a certain collection, daily

* [Task script](./script.liquid)

Use this task with the companion unpublishing task (see this task's documentation) to make a certain collection of products available on a schedule, and unavailable on another schedule.

## Default options

```json
{
  "collection_id__required": null
}
```

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

## Documentation

For best results, pair this task with [Unpublish a certain collection, daily](https://usemechanic.com/task/unpublish-a-certain-collection-daily), from our task library.

To configure this task, navigate to the collection you'd like to use in the Shopify admin. Copy _just_ the numeric portion from the URL (e.g. `12345`, if the collection URL is `https://example.myshopify.com/admin/collections/12345`), and use this as the "Collection ID" setting for this task.

Out of the box, this task will publish everything in this collection at 9am on weekdays, and 10am on weekends. To adjust this, click the "Show Advanced" link, and tweak the "Subscriptions" setting to taste. Each line represents midnight in your shop's local timezone, plus whatever number of hours you prefer. For example, `mechanic/scheduler/tuesday+13.hours` would mean Tuesday at 1pm.