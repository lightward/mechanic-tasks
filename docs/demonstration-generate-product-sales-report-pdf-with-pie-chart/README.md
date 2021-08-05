# Demonstration: Generate product sales report PDF with pie chart

Tags: Demonstration, PDF, Report

This task...

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

This task...

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-generate-product-sales-report-pdf-with-pie-chart), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-generate-product-sales-report-pdf-with-pie-chart.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
