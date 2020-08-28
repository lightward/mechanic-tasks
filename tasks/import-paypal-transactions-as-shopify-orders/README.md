# Import PayPal transactions as Shopify orders

* [Task script](./script.liquid)

Use this task when you want to record your external PayPal transactions as Shopify orders. Are you using PayPal subscriptions? Or receiving direct payments you'd like to record in Shopify? Use this task, or file a task request to have it modified for more purpose-specific uses. :) Again, this isn't for PayPal as a Shopify payment provider – it's for any time you might be using PayPal *outside* of your Shopify store.

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

## Subscriptions

```liquid
user/paypal/ipn
```

## Documentation

**To get set up, follow our tutorial: [Connecting PayPal to Mechanic](https://help.usemechanic.com/tutorials/connecting-paypal-to-mechanic).**

Then, configure to taste. :) Mechanic will use the PayPal order memo as the sole line item in the orders that are created, falling back to your "Default memo" setting.

Out of the box, this task will only create orders for transactions in which payment successfully went through. To modify this task to perform extra functionality (like auto-tagging based on subscription events, for example), file a task request from your Mechanic home screen.