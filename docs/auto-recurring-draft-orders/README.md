# Auto-recurring draft orders

* [task.json](../../tasks/auto-recurring-draft-orders.json) (for import/export)
* [Task script](./script.liquid)

This task searches for draft orders having the configured tag, and duplicates each one (minus the tag used for searching). Optionally, this task can automatically send an invoice to the customer on file, after the new draft order is created. Or, this task can auto-complete the order, marking the order as paid if you so chose. (Auto-completed orders will result in an email receipt being sent to the customer on file for the original draft order.)

## Default options

```json
{
  "draft_order_tag__required": "repeat-me",
  "complete_the_order_after_creating__boolean": null,
  "complete_the_order_and_mark_as_paid_after_creating__boolean": null,
  "send_email_invoice_after_creating__boolean": false,
  "email_invoice_subject": null,
  "email_invoice_bcc__email_array": null,
  "email_invoice_custom_message__multiline": null,
  "cycle_start_date__required": null,
  "number_of_days_in_cycle__number_required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
{% if options.send_email_invoice_after_creating__boolean or options.complete_the_order_after_creating__boolean or options.complete_the_order_and_mark_as_paid_after_creating__boolean %}shopify/draft_orders/create{% endif %}
```

## Documentation

This task searches for draft orders having the configured tag, and duplicates each one (minus the tag used for searching). Optionally, this task can automatically send an invoice to the customer on file, after the new draft order is created. Or, this task can auto-complete the order, marking the order as paid if you so chose. (Auto-completed orders will result in an email receipt being sent to the customer on file for the original draft order.)

Run this task manually to scan and duplicate matching draft orders. Use the "run" task options to control automatic running of this task.
