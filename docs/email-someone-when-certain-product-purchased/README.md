# Email someone when a certain product is purchased

Tags: Alert, Email, Orders, Products

This task sends an email notification, immediately after an order is paid - if a product in the order has a title matching the product title you configure. Optionally, configure this task with a delay, in days, to wait before sending the email. (The task will not send any emails for orders that have since been cancelled.)

* View in the task library: [usemechanic.com/task/email-someone-when-certain-product-purchased](https://usemechanic.com/task/email-someone-when-certain-product-purchased)
* Task JSON, for direct import: [task.json](../../tasks/email-someone-when-certain-product-purchased.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_title__required": null,
  "email_address__required": null,
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "reply_to_email_address": null,
  "number_of_days_to_wait_before_emailing__number": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% assign delay_days = options.number_of_days_to_wait_before_emailing__number %}
shopify/orders/paid{% if delay_days != blank %}+{{ delay_days }}.days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task sends an email notification, immediately after an order is paid - if a product in the order has a title matching the product title you configure. Optionally, configure this task with a delay, in days, to wait before sending the email. (The task will not send any emails for orders that have since been cancelled.)

[YouTube: See the upgrade process for this task!](https://youtu.be/xT9j0yMXPDM)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-someone-when-certain-product-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-someone-when-certain-product-purchased.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
