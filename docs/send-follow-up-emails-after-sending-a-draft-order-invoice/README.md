# Send follow-up emails after sending a draft order invoice

* [task.json](../../tasks/send-follow-up-emails-after-sending-a-draft-order-invoice.json) (for import/export)
* [Task script](./script.liquid)

Use this task to send a follow-up email, 24 hours after you send out an email invoice for a draft order. Optionally, set this task to continue sending follow-up messages, every day after that.

## Default options

```json
{
  "send_daily_emails__boolean": true,
  "email_subject__required": "Invoice {{ shop.draft_orders[event.data.draft_order_id].name }}: Your order payment is due",
  "email_body__multiline_required": "Hello,\n\nPlease complete your order using this link:\n\n{{ shop.draft_orders[event.data.draft_order_id].invoice_url | default: \"(invoice url will be displayed here)\" }}\n\nThanks,\nThe team at {{ shop.name }}"
}
```

## Subscriptions

```liquid
user/draft_orders/followup+24.hours
shopify/draft_orders/update
```

## Documentation

Use this task to send a follow-up email, 24 hours after you send out an email invoice for a draft order. Optionally, set this task to continue sending follow-up messages, every day after that.

After you send an invoice for a draft order, this task will send a follow-up email 24 hours later, reminding the customer on file to complete the order.

Please note: Because Shopify does not share information about the invoice you send, this task uses the email address of the customer on file for the order, _even if_ this is different than the email you use to send the invoice. If the draft order does _not_ have a customer on file, the task will not be able to send a follow-up.
