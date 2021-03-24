# Remind customers that their order is on the way

Tags: Reminder, Email, Shipping

Do you ship custom items, or do you have a lengthy turnaround time on your orders? Use this task to automatically re-assure customers that their order is in the queue, to be shipped as soon as possible. By default, this task sends an email 10 days (or a number you configure) after the order is paid, as long as the order remains fully paid, unfulfilled, and un-cancelled. Optionally, configure tags to add to the order and/or customer, to be added when the email is sent, and choose whether to only send reminders on weekdays.

* View in the task library: [usemechanic.com/task/remind-customers-that-their-order-is-on-the-way](https://usemechanic.com/task/remind-customers-that-their-order-is-on-the-way)
* Task JSON, for direct import: [task.json](../../tasks/remind-customers-that-their-order-is-on-the-way.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "number_of_days_to_wait__number_required": "10",
  "only_send_reminders_on_weekdays__boolean": false,
  "email_subject__required": "Don't worry – ORDER_NAME is still coming!",
  "email_body__multiline_required": "Hi CUSTOMER_FIRST_NAME,\n\nThank you for your order! We're writing to let you know that your order is still enqueued, and will be shipped to you as soon as it's ready. :)\n\nJust reply to this email if you have any questions.\n\nThanks,\n{{ shop.name }}",
  "tag_to_add_to_order": null,
  "tag_to_add_to_customer": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
user/order/customer_reminder
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Do you ship custom items, or do you have a lengthy turnaround time on your orders? Use this task to automatically re-assure customers that their order is in the queue, to be shipped as soon as possible. By default, this task sends an email 10 days (or a number you configure) after the order is paid, as long as the order remains fully paid, unfulfilled, and un-cancelled. Optionally, configure tags to add to the order and/or customer, to be added when the email is sent, and choose whether to only send reminders on weekdays.

Use the variables ORDER_NUMBER and CUSTOMER_FIRST_NAME to insert each of these values into your email subject and body respectively.

Note: When the "Only send reminders on weekdays" option is chosen, any emails that would have been sent on a weekend are instead emailed the following Monday.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/remind-customers-that-their-order-is-on-the-way), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/remind-customers-that-their-order-is-on-the-way.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
