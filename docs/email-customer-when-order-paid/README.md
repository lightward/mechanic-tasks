# Email customer when their order is paid

Quickly send a thank-you email (or any other sort of follow-up email) to your customers, as soon as their order is paid. (Optionally, require one or more order tags to be present, in order for the email to be sent.) And it's super easy to add a delay – set the task to subscribe "shopify/orders/paid+2.days" or "shopify/orders/paid+1.week" instead to create a thoughtful just-checking-back-in-with-you message. :)

* View in the task library: [usemechanic.com/task/email-customer-when-order-paid](https://usemechanic.com/task/email-customer-when-order-paid)
* Task JSON, for direct import: [task.json](../../tasks/email-customer-when-order-paid.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_order_tags_at_the_time_of_payment__array": null,
  "email_subject__required": "Order #{{ order.order_number }} is paid - thank you!",
  "email_body__multiline_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Quickly send a thank-you email (or any other sort of follow-up email) to your customers, as soon as their order is paid. (Optionally, require one or more order tags to be present, in order for the email to be sent.) And it's super easy to add a delay – set the task to subscribe "shopify/orders/paid+2.days" or "shopify/orders/paid+1.week" instead to create a thoughtful just-checking-back-in-with-you message. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-customer-when-order-paid), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-customer-when-order-paid.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
