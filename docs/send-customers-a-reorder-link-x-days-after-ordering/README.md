# Send customers a reorder link X days after ordering

Use this task to make repeat business easy. Set the number of days to wait, then let this task automatically email your customers a one-click reorder link X days after their purchase, sending them straight to checkout with their entire cart pre-filled.

* View in the task library: [usemechanic.com/task/send-customers-a-reorder-link-x-days-after-ordering](https://usemechanic.com/task/send-customers-a-reorder-link-x-days-after-ordering)
* Task JSON, for direct import: [task.json](../../tasks/send-customers-a-reorder-link-x-days-after-ordering.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Would you like to order again?",
  "email_body__multiline_required": "Hello,\n\nThanks for your order! Use this link to reorder in just a couple clicks:\n\n<b><a href=\"REORDER_URL\">Reorder now</a></b>\n\nCheers,\n{{ shop.name }}",
  "days_to_wait__number_required": null,
  "order_referral_code": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid+{{ options.days_to_wait__number_required | default: 30 }}.days
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to make repeat business easy. Set the number of days to wait, then let this task automatically email your customers a one-click reorder link X days after their purchase, sending them straight to checkout with their entire cart pre-filled.

Tip: Fill in the "Order referral code" option to enable order conversion tracking for this task's emails. ([Learn more about conversion tracking with order links.](https://help.shopify.com/en/themes/customization/cart/use-permalinks-to-preload-cart#conversion-tracking))

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-customers-a-reorder-link-x-days-after-ordering), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-customers-a-reorder-link-x-days-after-ordering.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
