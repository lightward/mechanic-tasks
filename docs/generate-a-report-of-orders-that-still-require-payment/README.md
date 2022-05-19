# Generate a report of orders that still require payment

Tags: CSV, Report, Unpaid

This task generates a CSV spreadsheet, listing orders that are unpaid, partially paid, or pending payment. The resulting report is emailed to the recipient of your choice. Optionally, choose to have this report  generated hourly, or daily.

* View in the task library: [tasks.mechanic.dev/generate-a-report-of-orders-that-still-require-payment](https://tasks.mechanic.dev/generate-a-report-of-orders-that-still-require-payment)
* Task JSON, for direct import: [task.json](../../tasks/generate-a-report-of-orders-that-still-require-payment.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_closed_orders__boolean": true,
  "recipient_email_address__email_required": null,
  "email_subject__required": "Orders that require payment: {{ \"now\" | date: \"%F\" }}",
  "email_body__required_multiline": "Hello,\n\nPlease find the attached report. Thanks!\n\n-Mechanic, for {{ shop.name }}",
  "csv_attachment_filename__required": "orders-that-require-payment-{{ \"now\" | date: \"%Y%m%d\" }}.csv",
  "run_hourly__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task generates a CSV spreadsheet, listing orders that are unpaid, partially paid, or pending payment. The resulting report is emailed to the recipient of your choice. Optionally, choose to have this report  generated hourly, or daily.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/generate-a-report-of-orders-that-still-require-payment), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/generate-a-report-of-orders-that-still-require-payment.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
