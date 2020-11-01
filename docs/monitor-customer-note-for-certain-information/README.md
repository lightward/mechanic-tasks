# Monitor customer note for certain information

* [task.json](../../tasks/monitor-customer-note-for-certain-information.json) (for import/export)
* [Task script](./script.liquid)

Use this task to keep an eye on the contents of a customer's note. When the text you want to watch for is added (e.g. "Authorization number:", or "VAT Registration Number:", or anything else!), Mechanic will add the tag of your choice to the customer, and optionally send you a notification email.

## Default options

```json
{
  "text_to_watch_for_in_the_customer_note__required": null,
  "require_a_case_sensitive_match__boolean": null,
  "customer_tag_to_apply__required": null,
  "staff_notification_email_recipient__email": null
}
```

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
```

## Documentation

Use this task to keep an eye on the contents of a customer's note. When the text you want to watch for is added (e.g. "Authorization number:", or "VAT Registration Number:", or anything else!), Mechanic will add the tag of your choice to the customer, and optionally send you a notification email.

Please note: Mechanic uses the absence of this task's tag to determine if any work should be done. This means that if the tag Mechanic adds is later removed, and if the customer note still has the matching text, Mechanic will re-tag the customer (and re-send a notification email, if configured) the next time the customer is updated.
