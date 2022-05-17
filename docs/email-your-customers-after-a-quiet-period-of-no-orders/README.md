# Email your customers after a quiet period of no orders

Tags: Email, Loyalty, Retention

Follow up with your customers – keep those relationships alive, and improve your returning customer rate, by emailing your customers after a few months of no order activity. By default, this task sends an email after 6 months of no order activity, and another 6 months after that.

* View in the task library: [tasks.mechanic.dev/email-your-customers-after-a-quiet-period-of-no-orders](https://tasks.mechanic.dev/email-your-customers-after-a-quiet-period-of-no-orders)
* Task JSON, for direct import: [task.json](../../tasks/email-your-customers-after-a-quiet-period-of-no-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "subject__required": "We've missed you!",
  "body__multiline_required": "Hello {{ order.customer.first_name | default: \"friend\" }},\n\nIt's been a while since you placed an order. Why not see what we have in store for you?\n\nSee you soon,\n\n{{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create+6.months
shopify/orders/create+12.months
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Follow up with your customers – keep those relationships alive, and improve your returning customer rate, by emailing your customers after a few months of no order activity. By default, this task sends an email after 6 months of no order activity, and another 6 months after that.

This task sends an email after your customer takes a break from making orders for a period of time.

By default, this task will wait for 6 months of no order activity, and will then send an email. 6 months after _that_, so long as no order activity has taken place, it'll send another email. To change this schedule, click "Show Advanced" in the task editor, and tweak the "Subscriptions" section to taste. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-your-customers-after-a-quiet-period-of-no-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-your-customers-after-a-quiet-period-of-no-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
