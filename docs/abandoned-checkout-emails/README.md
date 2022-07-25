# Abandoned checkout emails

Tags: Abandoned Checkout, Email, Retention

This task monitors checkouts in your store, and kicks off an email a configurable number of hours after a checkout is created – if the checkout wasn't completed, and if the customer provided their email address.

* View in the task library: [tasks.mechanic.dev/abandoned-checkout-emails](https://tasks.mechanic.dev/abandoned-checkout-emails)
* Task JSON, for direct import: [task.json](../../tasks/abandoned-checkout-emails.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Just one more step to finish your order!",
  "custom_message__multiline_required": "Hi, you added one or more items to your shopping cart and haven't completed your purchase. You can complete it now while it's still available.",
  "action_button_text__required": "Complete your purchase",
  "cart_items_header_text__required": "Items in your cart",
  "primary_brand_color_as_hex_rgb": "#cb6015",
  "hours_to_wait_before_sending_email__number_required": 24
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/checkouts/abandoned+{{ options.hours_to_wait_before_sending_email__number_required }}.hours
shopify/checkouts/create
shopify/checkouts/update
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors checkouts in your store, and kicks off an email a configurable number of hours after a checkout is created – if the checkout wasn't completed, and if the customer provided their email address.

This task uses the same basic formatting as the standard Shopify abandoned checkout notification template. You may override the action button background with your own brand color, provided it is entered as an RGB hex value (e.g. #abc123).

You can configure the custom message to the customer, the action button text, and the item list header. And since the task will set an email header to the primary locale (language) of your shop, these may be set to your native shop language. Product and variant titles will automatically be output in the language they are listed in your shop.

Even though they don't appear in the task preview, item images *will* appear in the sent emails.

**Important**: When using this task, make sure that Shopify's abandoned checkout notifications are disabled to prevent sending duplicate emails to customers.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/abandoned-checkout-emails), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/abandoned-checkout-emails.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
