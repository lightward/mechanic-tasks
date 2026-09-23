# Email gift recipients when orders are fulfilled

Tags: Email, Fulfillment, Orders

Email a gift recipient their personal message when the whole order has been fulfilled, using answers saved by a Mechanic form on the cart page.

* View in the task library: [tasks.mechanic.dev/email-gift-recipients-when-orders-are-fulfilled](https://tasks.mechanic.dev/email-gift-recipients-when-orders-are-fulfilled)
* Task JSON, for direct import: [task.json](../../tasks/email-gift-recipients-when-orders-are-fulfilled.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "form__storefrontform_required": "",
  "recipient_email_field_key__required": "recipient_email",
  "recipient_name_field_key__required": "recipient_name",
  "sender_name_field_key__required": "sender_name",
  "gift_message_field_key__required": "gift_message",
  "email_subject__required": "A gift for you from SENDER_NAME",
  "email_body__multiline_required": "Hello RECIPIENT_NAME,\n\nSENDER_NAME sent you a gift! Their order has now been fulfilled.\n\nGIFT_MESSAGE\n\nFrom the team at SHOP_NAME"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/fulfilled
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Email a gift recipient their personal message when the whole order has been fulfilled, using answers saved by a Mechanic form on the cart page.

## Setup

1. In Mechanic **Forms**, choose the **Add a gift message** starter. It saves answers to the Shopify cart instead of sending a webhook. Keep its field data keys, or update this task's field key options to match. You can change the labels and wording.
2. Publish the form, add its block to your theme's cart page, and save the theme. Customers must choose **Save gift message** and wait for confirmation before checkout. This does not work for checkout routes that bypass that form, such as Buy it now.
3. Select the published form in this task's **Form** option. No webhook, shared secret, or Mechanic JavaScript embed is needed for saving answers to the cart.
4. Customize the email subject and body. The placeholders `RECIPIENT_NAME`, `SENDER_NAME`, `GIFT_MESSAGE`, and `SHOP_NAME` are available in the body; all except `GIFT_MESSAGE` are available in the subject. The body is plain text and is safely escaped for email. Replies go to your shop's customer email address.
5. Save and enable the task, approve its requested Shopify access, and make sure your Mechanic account is [approved to send email](https://learn.mechanic.dev/platform/email).
6. Test with a test order and an inbox you control. Save the gift details in the cart, complete checkout, and fulfill the order. Check the Shopify claim action, email action, and recipient inbox. A form preview does not save cart answers or send email.

## Timing and saved details

This starter supports **one recipient and one message for the whole order**. It waits for Shopify's `shopify/orders/fulfilled` event and rechecks that the order is fully fulfilled and not cancelled. If the order is shipped in parts, it waits until all parts are fulfilled. Fulfillment is Shopify's recorded status, not proof of delivery or a carrier scan. Change the default email wording to suit your fulfillment process.

The task reads order custom attributes named `mechanic_form_<form ID>_<field key>`. It uses the selected form's attributes only. Recipient email must be a single valid address (up to 254 characters); recipient/sender names must be present and at most 200 characters; the message must be present and at most 4000 characters. Missing gift details are skipped; incomplete or invalid details produce a task error without sending an email. Answers are customer-supplied, not verified identity or marketing consent. The email does not include order prices, billing details, or a link to the buyer's order status page.

Cart answers remain on that cart until removed or replaced; emptying the cart alone does not remove its attributes. Customers can reopen the form to edit or remove them. File uploads cannot be saved to the cart. Unpublishing a form does not erase answers already saved to carts or orders.

## Duplicate events and recovery

Before sending email, the task atomically creates an order metafield in the `mechanic_gifts` namespace with a key of `gift_<form ID without hyphens>`. This requires order write access through Mechanic's normal task permissions. The JSON value records a `pending` claim and the triggering event ID; after the email action succeeds, a second Shopify action records `sent`. It does not edit fulfillment, payments, or line items.

Repeated fulfillment events and other copies of this task selecting the same form will skip an existing claim. If claiming fails, no email is queued. A failed or uncertain email action leaves the claim in place so a later event does not automatically send a second message. Review the original email action and confirm delivery before retrying that action. Replaying a successful claim callback or retrying an email that actually arrived can still duplicate delivery; this is not an exactly-once email guarantee. If the final status update fails, the original claim still prevents automatic repeat sends.

Disable this task to stop future gift notifications. Do not delete its order metafields to retry delivery. Already queued actions need separate attention, and disabling or unpublishing the form does not cancel them. The task is for new fulfillment events, not a backfill of existing fulfilled orders.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-gift-recipients-when-orders-are-fulfilled), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-gift-recipients-when-orders-are-fulfilled.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
