# Remind customers after x days about unpaid orders

Tags: Customers, Reminder, Schedule, Unpaid

This task wait for a configurable number of days (or hours!) after an order placed, and – if the order is still unpaid – emails the customer, and optionally adds a tag to the order. This task only sends one email – it does not send repeating reminders.

* View in the task library: [usemechanic.com/task/remind-customers-after-x-days-about-unpaid-orders](https://usemechanic.com/task/remind-customers-after-x-days-about-unpaid-orders)
* Task JSON, for direct import: [task.json](../../tasks/remind-customers-after-x-days-about-unpaid-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Don't forget! Order #{{ order.order_number }} still needs to be paid",
  "email_body__multiline_required": "Hi there,\n\nYour payment is still required! Please get in touch at {{ shop.customer_email }} to proceed.\n\nThanks,\n{{ shop.name }}",
  "tag_to_add_to_the_order": null,
  "number_of_days_to_wait__number_required": 7,
  "use_hours_instead_of_days__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create+{{ options.number_of_days_to_wait__number_required | default: 7 }}.{% if options.use_hours_instead_of_days__boolean %}hours{% else %}days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task wait for a configurable number of days (or hours!) after an order placed, and – if the order is still unpaid – emails the customer, and optionally adds a tag to the order. This task only sends one email – it does not send repeating reminders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/remind-customers-after-x-days-about-unpaid-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/remind-customers-after-x-days-about-unpaid-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
