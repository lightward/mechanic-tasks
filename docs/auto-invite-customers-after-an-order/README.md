# Auto-invite customers after an order

Tags: Email, Invite, Orders, Retention

Automatically prompt customers to activate their customer accounts, after placing an order in your store, by triggering a customizable Shopify-powered email. Useful if your online store unlocks special offers, functionality, or content after making a purchase. Optionally, only send invitations if the customer has a certain tag and/or has ordered a product with a specific tag.

* View in the task library: [tasks.mechanic.dev/auto-invite-customers-after-an-order](https://tasks.mechanic.dev/auto-invite-customers-after-an-order)
* Task JSON, for direct import: [task.json](../../tasks/auto-invite-customers-after-an-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_invite_if_the_customer_has_not_yet_been_invited__boolean": false,
  "only_invite_if_the_customer_has_this_tag": "",
  "only_invite_if_the_order_contains_a_product_with_this_tag": "",
  "custom_invitation_email_subject": "",
  "custom_invitation_email_message__multiline": "",
  "invitation_email_bcc__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Automatically prompt customers to activate their customer accounts, after placing an order in your store, by triggering a customizable Shopify-powered email. Useful if your online store unlocks special offers, functionality, or content after making a purchase. Optionally, only send invitations if the customer has a certain tag and/or has ordered a product with a specific tag.

This task works by asking Shopify to send along an invitation email, using the subject and body that you configure here. The email will use your Shopify account's "Customer account invite" email template, available in the "Notifications" area of your Shopify settings.

**Note:** Because this task triggers a Shopify-powered email, and because this email already uses a Shopify template, the actual message body is optional. (If provided, HTML and CSS are not supported.) And, there's no need to add in an invitation link yourself – this will be taken care of by the Shopify email template as well.



## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-invite-customers-after-an-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-invite-customers-after-an-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
