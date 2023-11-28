# Tag customers who reach a certain threshold of refunded orders

Tags: Customers, Metafields, Refunds, Tag

This task keeps track of how many lifetime refunded orders a customer has in your shop, and if that count hits a certain threshold, then it will apply a tag to the customer. This is useful for keeping tabs on serial returners.

* View in the task library: [tasks.mechanic.dev/tag-customers-who-reach-a-certain-threshold-of-refunded-orders](https://tasks.mechanic.dev/tag-customers-who-reach-a-certain-threshold-of-refunded-orders)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-who-reach-a-certain-threshold-of-refunded-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "refunded_orders_count_threshold_for_tagging__number_required": null,
  "customer_tag_to_apply__required": null,
  "refunded_orders_count_metafield_namespace_dot_key__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/refunds/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task keeps track of how many lifetime refunded orders a customer has in your shop, and if that count hits a certain threshold, then it will apply a tag to the customer. This is useful for keeping tabs on serial returners.

It runs when new refunds are created and may also be run manually to apply the metafield and tagging logic to all customers who have returned at least one order in your shop.

Configure the task with your numeric threshold, the customer tag to apply, and the customer metafield namespace and key for tracking the refunded orders count (e.g. "custom.refunded_orders_count"). Run it once manually to have it scan historical orders, and again as needed if you change the threshold number.

**IMPORTANT:** The [Read all orders](https://learn.mechanic.dev/platform/shopify/read-all-orders#configuration) option must be enabled in Mechanic so that this task can query orders beyond the past 60 days.



## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-who-reach-a-certain-threshold-of-refunded-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-who-reach-a-certain-threshold-of-refunded-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
