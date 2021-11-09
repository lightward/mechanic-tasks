# Bulk trigger Shopify Flow with historical data

Tags: Integration, Shopify Flow

Do you wish Shopify Flow workflows could run on historical data? Now they can! :D

* View in the task library: [usemechanic.com/task/bulk-trigger-shopify-flow-with-historical-data](https://usemechanic.com/task/bulk-trigger-shopify-flow-with-historical-data)
* Task JSON, for direct import: [task.json](../../tasks/bulk-trigger-shopify-flow-with-historical-data.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "start_date": "",
  "end_date": "",
  "flag_value": "mechanic-batch"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Do you wish Shopify Flow workflows could run on historical data? Now they can! :D

This task queries your orders, and calls Shopify Flow for each order returned. You can optionally provide a date range to limit the orders to be processed. If provided, these dates must be in this format *YYYY-MM-DD*.

It includes a flag value, intended to help Flow workflows identify the Mechanic order triggers that are relevant, ignoring those that are not. The flag value _only_ has significance if there are Flow workflows looking for its value, using workflow conditions. A Flow condition for this purpose might read like, _if User string is equal to 'mechanic-import'_.

This task is written to process orders, but can be modified to process products or customers. To make a change like this, open the task code, and update the bulk operation to query for the right resources. Then, update the Flow action to send `product_id` or `customer_id` as appropriate, instead of `order_id`.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/bulk-trigger-shopify-flow-with-historical-data), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/bulk-trigger-shopify-flow-with-historical-data.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
