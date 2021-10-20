# Abandoned checkout emails

Tags: Abandoned Checkout, Email, Retention

Roll your own abandoned checkout emails with this task – or, modify it to perform any other actions that your business needs when a checkout is let go. :) Out of the box, this task sends customers a recovery link, with an emails subject and message that you can easily customize.

* View in the task library: [usemechanic.com/task/abandoned-checkout-emails](https://usemechanic.com/task/abandoned-checkout-emails)
* Task JSON, for direct import: [task.json](../../tasks/abandoned-checkout-emails.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Just one more step to finish your order!",
  "email_body__required_multiline": "Hey there! You're almost done:\n\n<a href=\"ABANDONED_CHECKOUT_URL\">Finish your order today!</a>\n\nThanks,\n- The team at {{ shop.name }}",
  "hours_to_wait_before_sending_email__number_required": 24
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
user/checkouts/abandoned+{{ options.hours_to_wait_before_sending_email__number_required }}.hours
shopify/checkouts/create
shopify/checkouts/update
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Roll your own abandoned checkout emails with this task – or, modify it to perform any other actions that your business needs when a checkout is let go. :) Out of the box, this task sends customers a recovery link, with an emails subject and message that you can easily customize.

This task monitors checkouts in your store, and kicks off an email a day after a checkout is created – if the checkout wasn't completed, and if the customer provided their email address.

To change the followup time from 1 day to something else, click the "Show Advanced" link, and tweak the subscriptions with the time interval that suits your business.

Please note! While the full checkout details are stored, it'll require some custom code to substitute in more details than the checkout recovery URL. Click the "Show Advanced" link in the task editor to dig into the task script, and feel free to message support if you have any questions.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/abandoned-checkout-emails), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/abandoned-checkout-emails.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
