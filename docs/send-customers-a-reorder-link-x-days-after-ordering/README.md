# Send customers a reorder link X days after ordering

Tags: Customers, Email, Marketing, Retention

Use this task to make repeat business easy by automatically emailing your customers X days after their purchase, with a one-click reorder link that will send them straight to checkout with their entire cart pre-filled.

* View in the task library: [tasks.mechanic.dev/send-customers-a-reorder-link-x-days-after-ordering](https://tasks.mechanic.dev/send-customers-a-reorder-link-x-days-after-ordering)
* Task JSON, for direct import: [task.json](../../tasks/send-customers-a-reorder-link-x-days-after-ordering.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait__number_required": null,
  "email_subject__required": "Would you like to order again?",
  "email_body__multiline_required": "Hello,\n\nThanks for your order! Use this link to reorder in just a couple clicks:\n\n<b><a href=\"REORDER_URL\">Reorder now</a></b>\n\nCheers,\n{{ shop.name }}",
  "pending_tag__required": "reorder-link-pending",
  "sent_tag__required": "reorder-link-sent",
  "order_referral_code": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
mechanic/scheduler/hourly
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to make repeat business easy by automatically emailing your customers X days after their purchase, with a one-click reorder link that will send them straight to checkout with their entire cart pre-filled.

Configure the task with the days to wait, an email subject and body, and the pending and sent tags to be applied to the orders that prevent the task from sending more than one email per order.

Tip: Fill in the "Order referral code" option to enable order conversion tracking for this task's emails. ([Learn more about conversion tracking with order links.](https://help.shopify.com/en/themes/customization/cart/use-permalinks-to-preload-cart#conversion-tracking))

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-customers-a-reorder-link-x-days-after-ordering), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-customers-a-reorder-link-x-days-after-ordering.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
