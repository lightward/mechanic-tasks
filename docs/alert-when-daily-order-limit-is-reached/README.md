# Alert when daily order limit is reached

Tags: Alert, Email, Orders

Use this task to receive an alert when your store reaches a maximum number of orders per day. Unlike inventory-limiting tasks, this task only sends notifications without making any changes to your store's inventory or product availability.

* View in the task library: [tasks.mechanic.dev/alert-when-daily-order-limit-is-reached](https://tasks.mechanic.dev/alert-when-daily-order-limit-is-reached)
* Task JSON, for direct import: [task.json](../../tasks/alert-when-daily-order-limit-is-reached.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "maximum_daily_orders__number_required": "10",
  "notification_email_recipients__email_array_required": null,
  "only_count_orders_matching_this_query": "-status:cancelled",
  "email_subject__required": "Daily order limit reached: ORDERS_TODAY orders",
  "email_body__multiline_required": "Hello,\n\nYour store has reached its daily order limit.\n\nOrders today: ORDERS_TODAY\nDaily limit: MAXIMUM_DAILY_ORDERS\nLatest order: ORDER_NUMBER\n\nThe order counter will reset at midnight.\n\nThanks,\n{{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/scheduler/daily
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to receive an alert when your store reaches a maximum number of orders per day. Unlike inventory-limiting tasks, this task only sends notifications without making any changes to your store's inventory or product availability.

The task monitors incoming orders throughout the day and sends an email alert when your daily limit is reached. It automatically resets its count at midnight in your store's timezone.

### Features

* Send an alert when the daily maximum is reached
* Customizable email subject and body with placeholder variables
* Optionally filter which orders to count using Shopify's order search syntax
* Automatic daily reset at midnight
* Multiple notification recipients supported

### Email Template Variables

You can use these placeholder variables in your email templates:
* `ORDERS_TODAY` - Current order count
* `MAXIMUM_DAILY_ORDERS` - Your configured daily limit
* `ORDER_NUMBER` - The order number that triggered the alert (e.g., #1234)

You can also use standard Liquid variables like `{{ shop.name }}` and `{{ shop.domain }}`.

### Setup

1. Set your maximum daily orders limit
2. Enter email addresses for notifications (comma-separated for multiple recipients)
3. Customize the email subject and body templates
4. Optionally add an order query to count only specific orders

### Notes

* The task counts all orders by default, but you can filter using the same syntax as Shopify's order search (e.g., "-status:cancelled" to exclude cancelled orders)
* The alert is sent only once per day when the limit is reached
* The count resets at midnight in your store's timezone
* Use the "Run task" button to manually check the current order count

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/alert-when-daily-order-limit-is-reached), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/alert-when-daily-order-limit-is-reached.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
