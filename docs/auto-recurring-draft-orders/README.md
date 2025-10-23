# Auto-recurring draft orders

Tags: Draft Orders, Recurring

This task searches for draft orders having the configured tag, and duplicates each one (minus the tag used for searching). Optionally, this task can automatically send an invoice to the customer on file, after the new draft order is created. Or, this task can auto-complete the draft order, which will mark it as paid unless the original draft order being duplicated has NET or EVENT payment terms.

* View in the task library: [tasks.mechanic.dev/auto-recurring-draft-orders](https://tasks.mechanic.dev/auto-recurring-draft-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-recurring-draft-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "draft_order_tag__required": null,
  "cycle_start_date__date_required": null,
  "number_of_days_in_cycle__number_required": "7",
  "complete_the_order_after_creating__boolean": null,
  "send_email_invoice_after_creating__boolean": false,
  "email_invoice_subject": null,
  "email_invoice_bcc__email_array": null,
  "email_invoice_custom_message__multiline": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
{% if options.send_email_invoice_after_creating__boolean or options.complete_the_order_after_creating__boolean %}
  shopify/draft_orders/create
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task searches for draft orders having the configured tag, and duplicates each one (minus the tag used for searching). Optionally, this task can automatically send an invoice to the customer on file, after the new draft order is created. Or, this task can auto-complete the draft order, which will mark it as paid unless the original draft order being duplicated has NET or EVENT payment terms.

Use the "Cycle start date" and "Number of days in cycle" options to control the frequency of the recurring invoices. The task may also be run manually, but the cycle will still be checked to make sure the current day is valid for the cycle.

**IMPORTANT**:
- When duplicating invoices, this task will include most discount applications from the original draft order, including custom order and line item discounts, discount codes, and whether or not automatic discounts can be applied.
- Auto-completed draft orders which do not have payment terms will result in the standard Shopify order confirmation email being sent to the customer on file for the original draft order.
- EVENT payment terms include "Payment on receipt" and "Payment on fulfillment"
- FIXED payment terms are not supported by this task


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-recurring-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-recurring-draft-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
