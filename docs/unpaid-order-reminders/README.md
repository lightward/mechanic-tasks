# Send recurring reminders about unpaid orders

* [task.json](../../tasks/unpaid-order-reminders.json) (for import/export)
* [Task script](./script.liquid)

This task sends recurring unpaid order reminders to customers, emailing them on a configurable schedule, until the order is no longer "pending" or until the order is cancelled.

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

## Subscriptions

```liquid
mechanic/scheduler/hourly
```

## Documentation

This task sends recurring unpaid order reminders to customers, emailing them on a configurable schedule, until the order is no longer "pending" or until the order is cancelled.

Use the variables ORDER_NUMBER, AMOUNT_DUE, and TAX_LINES to insert each of these values in to your email subject or body.

​To have the task _only_ email for fulfilled orders, set the "Limit to orders matching this query" option to "fulfillment_status:shipped".

Use test mode to have this task report what emails it _would_ send, if test mode were not enabled. It's a good idea to start with this. :)

[YouTube: Watch the development video!](https://youtu.be/IhLJHfIYrgg)
