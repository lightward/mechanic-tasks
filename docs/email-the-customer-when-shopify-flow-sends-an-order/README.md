# Email the customer when Shopify Flow sends an order

Tags: Customers, Email, Orders, Shopify Flow

Use this task with Shopify Flow to email a customer about their order, using a subject and message that you write.

* View in the task library: [tasks.mechanic.dev/email-the-customer-when-shopify-flow-sends-an-order](https://tasks.mechanic.dev/email-the-customer-when-shopify-flow-sends-an-order)
* Task JSON, for direct import: [task.json](../../tasks/email-the-customer-when-shopify-flow-sends-an-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "An update on your order ORDER_NAME",
  "email_body__required_multiline": "Hi CUSTOMER_FIRST_NAME,\n\nWe have an update on your order ORDER_NAME. You can see the latest details here:\nORDER_STATUS_URL\n\nIf you have any questions, just reply to this email.\n\nThanks,\nSHOP_NAME",
  "reply_to_email_address__email": null,
  "from_display_name": null,
  "bcc_email_addresses__email_array": null,
  "test_mode__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
user/flow/email_customer
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task with Shopify Flow to email a customer about their order, using a subject and message that you write.

Shopify Flow decides which orders qualify, and this task sends the email. It pairs with the Shopify Flow template "Email the customer when a tag is added to an order", and any other workflow can call it too.

### How it works

When Shopify Flow sends an order with the event topic `user/flow/email_customer`, this task looks up that order and sends your email to the email address on the order. If the order has no email address, the task uses the customer's email address instead. If neither exists, or if Shopify can't find the order, the task sends nothing and says why in its log.

Mechanic adds the `customer-emailed` order tag after its mail provider accepts the message. A per-order metafield (`mechanic.flow_customer_email_claim`) prevents a second request from sending again, including while the first email is pending. Removing the tag does not reset the task. Test mode and missing recipients leave the order untouched.

If the email action fails, check its delivery result before retrying that action in Mechanic. If only the final tagging action fails, retry the tagging action. The order claim stays in place so further tag edits cannot send a second message.

### Setting up the workflow

In Shopify Flow, add the action **Send event to Mechanic** to your workflow, with these values:

* Event topic: `user/flow/email_customer`
* Event data: `{"order_id": "{{order.id}}"}`

### Placeholders

Use any of these in the email subject and the email body:

* `ORDER_NAME`: the order name, such as #1234
* `CUSTOMER_FIRST_NAME`: the customer's first name. If it's missing, the task uses the first name from the order's shipping address (or its billing address, when there is no shipping address), and then the word "there".
* `CUSTOMER_LAST_NAME`: the customer's last name. If it's missing, the task uses the last name from the same address, and then leaves it empty.
* `ORDER_STATUS_URL`: the address of the order status page for this order
* `SHOP_NAME`: the name of your store

The email body is sent as HTML, and the line breaks you type are kept.

### Options

* **Reply to email address**: where replies from the customer go. Leave this empty to use your store's customer email address.
* **From display name**: the sender name the customer sees. Leave this empty to use your store's name.
* **BCC email addresses**: addresses that receive a copy of every email this task sends.
* **Test mode**: the task shows the email it would send, without sending anything.

### Before you start

Mechanic sends email only for accounts that have been approved for email. If your Mechanic account is new, write to team@usemechanic.com to ask for approval. Stores on a Shopify trial cannot send email. Mechanic email is for transactional messages like this one, not for marketing.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-the-customer-when-shopify-flow-sends-an-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-the-customer-when-shopify-flow-sends-an-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
