# Email a report of customers who haven't ordered in X days

Tags: Customers, Email, Report, Retention

Use this task to request or schedule an email digest of customers, having a certain tag, who haven't placed an order in a certain number of days.

* View in the task library: [usemechanic.com/task/email-a-report-of-customers-who-havent-ordered-in-x-days](https://usemechanic.com/task/email-a-report-of-customers-who-havent-ordered-in-x-days)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/shopify/bulk_operation

mechanic/user/trigger

{% if options.send_email_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

{% if options.send_email_every_monday__boolean %}
  mechanic/scheduler/monday
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to request or schedule an email digest of customers, having a certain tag, who haven't placed an order in a certain number of days.

Run this task manually to request a report immediately, or configure the task to run automatically on a schedule.

[YouTube: Watch the development video!](https://youtu.be/y1fV3aQrS1g)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-a-report-of-customers-who-havent-ordered-in-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-report-of-customers-who-havent-ordered-in-x-days.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
