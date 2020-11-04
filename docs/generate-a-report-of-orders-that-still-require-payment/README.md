# Generate a report of orders that still require payment

* [task.json](../../tasks/generate-a-report-of-orders-that-still-require-payment.json) (for import/export)
* [Task script](./script.liquid)

This task generates a CSV spreadsheet, listing orders that are unpaid, partially paid, or pending payment. The resulting report is emailed to the recipient of your choice. Optionally, choose to have this report  generated hourly, or daily.

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

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

This task generates a CSV spreadsheet, listing orders that are unpaid, partially paid, or pending payment. The resulting report is emailed to the recipient of your choice. Optionally, choose to have this report  generated hourly, or daily.
