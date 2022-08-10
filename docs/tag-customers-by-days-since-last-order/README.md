# Tag customers by days since last order

Tags: Customers, Loyalty, Tag

This task will run daily to query all customers in your shop who have placed an order, tagging each with whichever configured tag is paired with the closest "days since last order" threshold. This is great way to keep tabs on who is active in your store, and who you need might need to reconnect with.

* View in the task library: [tasks.mechanic.dev/tag-customers-by-days-since-last-order](https://tasks.mechanic.dev/tag-customers-by-days-since-last-order)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-by-days-since-last-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tags_and_days_since_last_order__keyval_number_required": {
    "At Risk": "90",
    "Active": "0"
  },
  "create_customer_segments_by_tag__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/shopify/bulk_operation
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will run daily to query all customers in your shop who have placed an order, tagging each with whichever configured tag is paired with the closest "days since last order" threshold. This is great way to keep tabs on who is active in your store, and who you need might need to reconnect with.

Optionally, you can select "Create customer segments by tag" to have the task create new customer segments for each tag configured in this task.

The task comes preconfigured with an "At Risk" tag set at 90 days since last order, and an "Active" tag for anyone who has placed an order more recently. Change these configuration values to whatever makes the most sense for your business.

Note: the order in which you enter the tags and days since pairs does not matter; at run time, the task will first sort by the largest days since value, and then make tagging decisions accordingly.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-by-days-since-last-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-by-days-since-last-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
