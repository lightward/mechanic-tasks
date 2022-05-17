# Cancel and close unpaid orders after x hours/days

Tags: Cancel, Orders, Unpaid

This task scans for orders that are more than X days or hours old that have a financial status of "pending", and ensures that they are all closed/archived and cancelled. Orders that are already closed will be cancelled, and orders that are already cancelled will be closed. Optionally, choose to add a tag to such orders.

* View in the task library: [tasks.mechanic.dev/cancel-and-close-unpaid-orders-after-two-days](https://tasks.mechanic.dev/cancel-and-close-unpaid-orders-after-two-days)
* Task JSON, for direct import: [task.json](../../tasks/cancel-and-close-unpaid-orders-after-two-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_process_orders_having_this_tag": null,
  "ignore_orders_having_this_tag": null,
  "period_to_wait_before_checking_each_order__number_required": 1,
  "period_to_wait_is_in_hours__boolean": null,
  "period_to_wait_is_in_days__boolean": true,
  "tag_to_add_to_the_order": null,
  "void_payment_when_possible__boolean": null,
  "restock_line_items__boolean": null,
  "send_cancellation_email_to_customer__boolean": false,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.period_to_wait_is_in_hours__boolean %}
  mechanic/scheduler/hourly
{% elsif options.period_to_wait_is_in_days__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task scans for orders that are more than X days or hours old that have a financial status of "pending", and ensures that they are all closed/archived and cancelled. Orders that are already closed will be cancelled, and orders that are already cancelled will be closed. Optionally, choose to add a tag to such orders.

If configured with an interval in hours, this task will run hourly. If configured with an interval in days, the task will run every night at midnight, in your store's local timezone. Run this task manually to perform the scan on demand.

Run first using test mode, to ensure expected results before running without it.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/cancel-and-close-unpaid-orders-after-two-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/cancel-and-close-unpaid-orders-after-two-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
