# Import PayPal transactions as Shopify orders

Tags: External API, Import, Orders

Use this task when you want to record your external PayPal transactions as Shopify orders. Are you using PayPal subscriptions? Or receiving direct payments you'd like to record in Shopify? Use this task, or file a task request to have it modified for more purpose-specific uses. :) Again, this isn't for PayPal as a Shopify payment provider – it's for any time you might be using PayPal *outside* of your Shopify store.

* View in the task library: [tasks.mechanic.dev/import-paypal-transactions-as-shopify-orders](https://tasks.mechanic.dev/import-paypal-transactions-as-shopify-orders)
* Task JSON, for direct import: [task.json](../../tasks/import-paypal-transactions-as-shopify-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_import_these_transaction_types__array": null,
  "only_import_completed_transactions__boolean": true,
  "send_receipt__boolean": null,
  "default_memo": "Your PayPal payment",
  "order_requires_shipping__boolean": null,
  "mark_as_fulfilled__boolean": null,
  "send_fulfillment_receipt__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/paypal/ipn
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task when you want to record your external PayPal transactions as Shopify orders. Are you using PayPal subscriptions? Or receiving direct payments you'd like to record in Shopify? Use this task, or file a task request to have it modified for more purpose-specific uses. :) Again, this isn't for PayPal as a Shopify payment provider – it's for any time you might be using PayPal *outside* of your Shopify store.

**To get set up, follow our tutorial: [Connecting PayPal to Mechanic](https://learn.mechanic.dev/faq/how-do-i-connect-paypal-to-shopify-with-mechanic).**

Then, configure to taste. :) Mechanic will use the PayPal order memo as the sole line item in the orders that are created, falling back to your "Default memo" setting.

Out of the box, this task will only create orders for transactions in which payment successfully went through. To modify this task to perform extra functionality (like auto-tagging based on subscription events, for example), file a task request from your Mechanic home screen.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/import-paypal-transactions-as-shopify-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/import-paypal-transactions-as-shopify-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
