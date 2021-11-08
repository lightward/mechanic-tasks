# Bulk run Shopify Flow on historical data

Tags: Integration, Shopify Flow

Do you wish Shopify Flow workflows could run on historical data? While they can now! 

* View in the task library: [usemechanic.com/task/bulk-run-shopify-flow-on-historical-data](https://usemechanic.com/task/bulk-run-shopify-flow-on-historical-data)
* Task JSON, for direct import: [task.json](../../tasks/bulk-run-shopify-flow-on-historical-data.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "start_date": "",
  "end_date": ""
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

Do you wish Shopify Flow workflows could run on historical data? While they can now! 

This task queries your orders and calls Shopify Flow for each order returned. You can optionally provide a date range to limit the orders to be processed. If provided, these dates must be in this format *YYYY-MM-DD*.

To process Products or Customers, update the bulk operation query in the code and update Mechanic Flow action to send `product_id` or `customer_id`.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/bulk-run-shopify-flow-on-historical-data), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/bulk-run-shopify-flow-on-historical-data.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
