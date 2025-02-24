# Tag customers with open draft orders

Tags: Customers, Draft Orders, Tag

This task allows you to easily see which customers have open draft orders. Using the tag of your choice, it will set it on any customers with at least one open draft order (including draft orders where an invoice has been sent).

* View in the task library: [tasks.mechanic.dev/tag-customers-with-open-draft-orders](https://tasks.mechanic.dev/tag-customers-with-open-draft-orders)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-with-open-draft-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/draft_orders/create
shopify/draft_orders/update
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task allows you to easily see which customers have open draft orders. Using the tag of your choice, it will set it on any customers with at least one open draft order (including draft orders where an invoice has been sent).

It runs on draft order creation and updates, as well as a daily scan of all customers with the tag or an open draft order. This daily run will handle the use cases of deleting a customer's only open draft order or switching the customer on a draft order. Run the task manually to run this same comprehensive scan.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-with-open-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-with-open-draft-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
