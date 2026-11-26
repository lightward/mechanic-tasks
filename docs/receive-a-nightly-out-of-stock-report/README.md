# Receive a nightly out-of-stock report

Tags: Email, Inventory, Low Stock, Report, Schedule

Based on an out-of-stock threshold you define, this task sends you an email summary (with CSV attachment) of all variants that are out of stock in any location. Run this task manually to receive the report on demand.

* View in the task library: [tasks.mechanic.dev/receive-a-nightly-out-of-stock-report](https://tasks.mechanic.dev/receive-a-nightly-out-of-stock-report)
* Task JSON, for direct import: [task.json](../../tasks/receive-a-nightly-out-of-stock-report.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "out_of_stock_quantity__number_required": 0,
  "report_recipient_email__email_required": null,
  "report_subject__required": "Out of stock report ({{ \"now\" | date: \"%Y-%m-%d\" }})",
  "use_shopify_flow_schedule__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.use_shopify_flow_schedule__boolean %}
  user/flow/low_stock_report
{% else %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Based on an out-of-stock threshold you define, this task sends you an email summary (with CSV attachment) of all variants that are out of stock in any location. Run this task manually to receive the report on demand.

To schedule this report with Shopify Flow, select “Use Shopify Flow schedule” and enable the Flow workflow that sends user/flow/low_stock_report. Flow then controls when the report runs. You can still run it manually. Only tracked variants at or below the threshold at a location are included. If none qualify, the task skips the email.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/receive-a-nightly-out-of-stock-report), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/receive-a-nightly-out-of-stock-report.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
