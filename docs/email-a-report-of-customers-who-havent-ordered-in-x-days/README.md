# Email a report of customers who haven't ordered in X days

Tags: Customers, Email, Report, Retention

Use this task to request or schedule an email digest of customers, having a certain tag, who haven't placed an order in a certain number of days.

* View in the task library: [tasks.mechanic.dev/email-a-report-of-customers-who-havent-ordered-in-x-days](https://tasks.mechanic.dev/email-a-report-of-customers-who-havent-ordered-in-x-days)
* Task JSON, for direct import: [task.json](../../tasks/email-a-report-of-customers-who-havent-ordered-in-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_customer_tag__required": null,
  "include_customers_who_have_not_placed_an_order_in_this_many_days__number_required": null,
  "email_subject_prefix__required": null,
  "email_recipient__required_email": null,
  "send_email_anyway_if_no_customers_are_found__boolean": null,
  "send_email_daily__boolean": null,
  "send_email_every_monday__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.send_email_daily__boolean %}
  mechanic/scheduler/daily
{% elsif options.send_email_every_monday__boolean %}
  mechanic/scheduler/monday
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to request or schedule an email digest of customers, having a certain tag, who haven't placed an order in a certain number of days.

Run this task manually to request a report immediately, or configure the task to run automatically on a schedule.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-a-report-of-customers-who-havent-ordered-in-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-report-of-customers-who-havent-ordered-in-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
