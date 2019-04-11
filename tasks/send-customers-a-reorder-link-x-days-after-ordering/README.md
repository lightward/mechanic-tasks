# Send customers a reorder link X days after ordering

* [Task script](./script.liquid)

Use this task to make repeat business easy. Set the number of days to wait, then let this task automatically email your customers a one-click reorder link X days after their purchase, sending them straight to checkout with their entire cart pre-filled.

## Default options

```json
{
  "email_subject__required": "Would you like to order again?",
  "email_body__multiline_required": "Hello,\n\nThanks for your order! Use this link to reorder in just a couple clicks:\n\n<b><a href=\"REORDER_URL\">Reorder now</a></b>\n\nCheers,\n{{ shop.name }}",
  "days_to_wait__number_required": null,
  "order_referral_code": null
}
```

## Subscriptions

```liquid
shopify/orders/paid+{{ options.days_to_wait__number_required | default: 30 }}.days
```

## Documentation

Tip: Fill in the "Order referral code" option to enable order conversion tracking for this task's emails. ([Learn more about conversion tracking with order links.](https://help.shopify.com/en/themes/customization/cart/use-permalinks-to-preload-cart#conversion-tracking))