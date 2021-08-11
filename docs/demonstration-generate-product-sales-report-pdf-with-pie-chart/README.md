# Demonstration: Generate product sales report PDF with pie chart

Tags: Demonstration, PDF, Report

This task demonstrates how a product sales report can be generated as PDF and emailed to one or more recipients. It also shows how charts can be embedded in the PDF report using a 3rd party library like [ChartJS](https://www.chartjs.org/).

* View in the task library: [usemechanic.com/task/demonstration-generate-product-sales-report-pdf-with-pie-chart](https://usemechanic.com/task/demonstration-generate-product-sales-report-pdf-with-pie-chart)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-generate-product-sales-report-pdf-with-pie-chart.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "report_on_sales_from_today__boolean": null,
  "report_on_sales_from_yesterday__boolean": null,
  "report_on_sales_in_past_week__boolean": null,
  "report_on_sales_in_past_month__boolean": null,
  "report_on_sales_in_past_quarter__boolean": null,
  "report_on_sales_in_past_year__boolean": null,
  "group_by_product_type__boolean": null,
  "group_by_vendor__boolean": null,
  "email_report_to__array_required": null,
  "run_this_task_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_this_task_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task demonstrates how a product sales report can be generated as PDF and emailed to one or more recipients. It also shows how charts can be embedded in the PDF report using a 3rd party library like [ChartJS](https://www.chartjs.org/).

By default, the report will generate sales data by product. You may also choose to have the report group sales by product type or vendor. Each group type will generate a single pie chart showing the top 10 products (or types/vendors) by total sales in the selected reporting period.

For the sales reporting period, select _only_ one of the following options:
- Report on sales from today
- Report on sales from yesterday
- Report on sales in the past week
- Report on sales in the past month
- Report on sales in the past quarter
- Report on sales in the past year

The task can be run manually, or optionally, set to run as a daily report by checking the “Run this task daily” option. If a less frequent schedule is desired, then you may modify the __mechanic/scheduler/daily__ subscription to another frequency. See the [scheduler](https://learn.mechanic.dev/platform/events/topics#scheduler) section in the docs for more details.

Note: For shops with a high frequency of orders and/or a very large product catalog, these PDF reports can generate a large amount of pages. Consequently, this task should be considered a starting point to develop reporting tasks that work for your shop’s unique requirements.


## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-generate-product-sales-report-pdf-with-pie-chart), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-generate-product-sales-report-pdf-with-pie-chart.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
