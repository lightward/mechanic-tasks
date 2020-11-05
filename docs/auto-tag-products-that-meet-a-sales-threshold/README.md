# Auto-tag products that meet a sales threshold

Out of the box, this task scans the last week's worth of paid orders, and auto-tags products that meet the sales threshold of your choice, removing the tag from products that no longer qualify. This scan can be run on demand (with the "Run task" button), and will otherwise run nightly.

* View in the task library: [usemechanic.com/task/auto-tag-products-that-meet-a-sales-threshold](https://usemechanic.com/task/auto-tag-products-that-meet-a-sales-threshold)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-that-meet-a-sales-threshold.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tally_by_line_item_quantity__boolean": true,
  "tally_by_line_item_subtotals__boolean": false,
  "tally_by_number_of_orders__boolean": false,
  "minimum_tally_threshold_per_product__required_number": "",
  "product_tag_to_apply__required": "",
  "order_query__required": "financial_status:paid processed_at:past_week"
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

Out of the box, this task scans the last week's worth of paid orders, and auto-tags products that meet the sales threshold of your choice, removing the tag from products that no longer qualify. This scan can be run on demand (with the "Run task" button), and will otherwise run nightly.

You can choose between a threshold defined by line item quantity (for the total number of units sold), by line item subtotals (for the total amount of money each product earned), or by number of orders (for the total number of times a customer placed an order including that product). You can also reconfigure the query used to fetch orders, to get specific about what orders you want to consider.

Out of the box, this task scans the last week's worth of paid orders, and auto-tags products that meet the sales threshold of your choice, removing the tag from products that no longer qualify. This scan can be run on demand (with the "Run task" button), and will otherwise run nightly.

You can choose between a threshold defined by line item quantity (for the total number of units sold), by line item subtotals (for the total amount of money each product earned), or by number of orders (for the total number of times a customer placed an order including that product).

Configure the "Order query" option to get specific about which orders you want to consider. When altering the "processed_at" query parameter, you may use the following values:

* past_week
* past_month
* past_quarter
* past_year
* ... or a YYYY-MM-DD value, as in "processed_at:>=2019-01-01" ([read about query comparators](https://help.shopify.com/en/api/getting-started/search-syntax#comparators))

This task can take some time to run, depending on the number of orders that need to be scanned. :)

For the interested, see the very end of the "Task result" portion of each task run's event, for a logged dump of product IDs mapped to the tallies Mechanic has arrived at for each one. You can use this to make sure you understand why Mechanic is making the tagging decisions it's making.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-products-that-meet-a-sales-threshold), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-that-meet-a-sales-threshold.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
