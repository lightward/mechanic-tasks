# Unpublish products that fall below a rolling sales threshold

Tags: Products, Unpublish

This task scans the last x days of orders, and unpublishes any products that haven't met your specified sales threshold during that time period, from whichever sales channel you select. By default, this task adds up the line item subtotals for each product (quantity times price), but it can also count by total quantity sold. This task only looks at products that were published before the time period being examined.

* View in the task library: [usemechanic.com/task/unpublish-products-that-fall-below-a-rolling-sales-threshold](https://usemechanic.com/task/unpublish-products-that-fall-below-a-rolling-sales-threshold)
* Task JSON, for direct import: [task.json](../../tasks/unpublish-products-that-fall-below-a-rolling-sales-threshold.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_name__required": "Online Store",
  "number_of_days_back_to_look__number_required": 30,
  "minimum_sales_threshold_for_staying_published__number_required": null,
  "use_total_quantity_instead_of_line_item_subtotals__boolean": false,
  "test_mode__boolean": true,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans the last x days of orders, and unpublishes any products that haven't met your specified sales threshold during that time period, from whichever sales channel you select. By default, this task adds up the line item subtotals for each product (quantity times price), but it can also count by total quantity sold. This task only looks at products that were published before the time period being examined.

This task scans the last x days of orders, and unpublishes any products that haven't met your specified sales threshold during that time period. By default, this task adds up the line item subtotals for each product (quantity times price), but it can also count by total quantity sold. This task only looks at products that were published before the time period being examined.

Use test mode to ensure that this task does what you expect, before running it for real. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/unpublish-products-that-fall-below-a-rolling-sales-threshold), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-products-that-fall-below-a-rolling-sales-threshold.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
