# Send recurring reminders about unpaid orders

Tags: Email, Orders, Unpaid

This task sends recurring unpaid order reminders to customers, emailing them on a configurable schedule, until the order is no longer "pending" or until the order is cancelled.

* View in the task library: [usemechanic.com/task/unpaid-order-reminders](https://usemechanic.com/task/unpaid-order-reminders)
* Task JSON, for direct import: [task.json](../../tasks/unpaid-order-reminders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_partially_paid_orders__boolean": false,
  "limit_to_orders_matching_this_query": "tag:sendreminder",
  "ignore_customers_having_this_tag": null,
  "initial_delay_period__number_required": null,
  "interval_period_between_emails__number_required": null,
  "periods_given_are_in_days__boolean": null,
  "periods_given_are_in_hours__boolean": null,
  "email_subject__required": "Order ORDER_NUMBER: AMOUNT_DUE is still outstanding!",
  "email_body__multiline_required": "Hello,\n\nFor your order (ORDER_NUMBER), we still require AMOUNT_DUE.\n\nThanks,\n{{ shop.name }}",
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/scheduler/hourly
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task sends recurring unpaid order reminders to customers, emailing them on a configurable schedule, until the order is no longer "pending" or until the order is cancelled.

Use the variables ORDER_NUMBER, AMOUNT_DUE, and TAX_LINES to insert each of these values in to your email subject or body.

​To have the task _only_ email for fulfilled orders, set the "Limit to orders matching this query" option to "fulfillment_status:shipped".

Use test mode to have this task report what emails it _would_ send, if test mode were not enabled. It's a good idea to start with this. :)

[YouTube: Watch the development video!](https://youtu.be/IhLJHfIYrgg)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/unpaid-order-reminders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpaid-order-reminders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
