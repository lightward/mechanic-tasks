# Email POS form answers after a paid sale

Tags: Email, Orders

Email saved Mechanic POS form answers to your workshop or team after a paid POS sale. Use it with the short Add engraving or Add a gift note starter, or your own POS form.

* View in the task library: [tasks.mechanic.dev/email-pos-form-answers-after-a-paid-sale](https://tasks.mechanic.dev/email-pos-form-answers-after-a-paid-sale)
* Task JSON, for direct import: [task.json](../../tasks/email-pos-form-answers-after-a-paid-sale.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "pos_form_id__required": "",
  "email_recipients__email_array_required": []
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Email saved Mechanic POS form answers to your workshop or team after a paid POS sale. Use it with the short Add engraving or Add a gift note starter, or your own POS form.

## Set up the workflow

1. In Mechanic **Forms → Create form → Point of sale**, choose **Add engraving** (item and engraving text) or **Add a gift note** (one message). Keep it short for staff at the counter. You can customize the fields; this task includes every nonempty saved answer.
2. Publish the form and add the **Mechanic Forms** tile in Shopify POS. An active cart with an item is required. This is a save-with-sale workflow, not standalone registration.
3. Open the form's **Submission settings**, copy its **Form ID**, and paste it into this task's **POS form ID** option. Choose the recipient inboxes in **Email recipients**. No webhook or shared secret is needed. Install a separate copy of the task for each form you want to email; each copy can have its own recipients.
4. Save and enable this task. Make sure the shop is [approved to send email](https://learn.mechanic.dev/platform/email).
5. In POS, add a product, open the form, enter the answers, and choose **Save to cart**. Complete a paid test sale. Check the saved order details, the Mechanic email action, and an inbox you control. Form preview and Save to cart do not send this email. Task preview uses sample engraving answers to show the email without sending it.

## What the task does

The task runs on `shopify/orders/paid`, checks that the webhook describes an uncancelled POS order with paid status, and reads only `_mechanic_pos_<your form ID>` from the order's additional details. Orders without this form are skipped. It does not read or change the customer profile, change fulfillment, or send an invoice. A deposit or partially paid order will not trigger an email until the order becomes fully paid.

Saved answers belong to the sale, not an individual line item. For engraving, staff must identify the item and quantity in the form. This is one set of instructions per form per sale; it is not a separate engraving entry for every cart item. The gift note starter sends the note to your team, **not to the gift recipient**.

Email headings come from the fields' data keys with underscores changed to spaces. Labels can be edited freely, but use readable data keys. Text is escaped for email; checkbox answers become Yes or No. Invalid JSON, unsupported versions, duplicate form properties, and unsupported answer values produce an error without emailing partial instructions. Blank answers are omitted, while unchecked checkboxes remain No.

Email runs asynchronously after payment. Save confirms storage, not email delivery. Inspect failed email actions before retrying. Re-running the event, enabling duplicate task copies, or receiving duplicate paid events can send another email; this task does not guarantee exactly-once delivery. It does not watch for later edits to order details or recall an email if the order is later cancelled.

## Availability

POS Forms must be enabled for the shop, and the POS extension must be installed. Installing this task does not enable POS Forms or create a form. Existing forms continue to work; the task supports the current version 1 POS saved-answer format.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-pos-form-answers-after-a-paid-sale), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-pos-form-answers-after-a-paid-sale.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
