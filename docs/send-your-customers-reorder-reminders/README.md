# Send your customers reorder reminders

Tags: Customers, Email, Loyalty, Reminder

Useful for customers who need recurring reminders to reorder. Optionally filtering by a customer tag, this task monitors the most recent order for each customer, and sends them reminders every x days since that order.

* View in the task library: [usemechanic.com/task/send-your-customers-reorder-reminders](https://usemechanic.com/task/send-your-customers-reorder-reminders)
* Task JSON, for direct import: [task.json](../../tasks/send-your-customers-reorder-reminders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_include_customers_having_this_tag": null,
  "number_of_days_to_wait_between_emails__number_required": null,
  "email_subject__required": "It's time to reorder!",
  "email_body__multiline_required": "Hello,\n\nIt's been X days since your last order (ORDER_NUMBER). <a href=\"https://{{ shop.domain  }}/\">Return to our store</a>\n\nThanks,\n{{ shop.name }}",
  "test_mode__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.test_mode__boolean %}
  mechanic/user/trigger
{% endif %}

mechanic/scheduler/daily
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful for customers who need recurring reminders to reorder. Optionally filtering by a customer tag, this task monitors the most recent order for each customer, and sends them reminders every x days since that order.

This task runs daily, at midnight in your store's timezone. Optionally filtering by a customer tag, it monitors the most recent order for each customer, and sends them reminders every x days since that order. The task will continue sending reorder reminders, every x days since each customer's latest order.

This task will send emails to the address on file for the customer, falling back to the email on file for the order if the customer has no email address.

To test this task, enable test mode, and save. You'll find a new "Run task" button, which will report the emails that would be sent on the current date.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-your-customers-reorder-reminders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-your-customers-reorder-reminders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
