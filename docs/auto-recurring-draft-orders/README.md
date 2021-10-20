# Auto-recurring draft orders

Tags: Draft Orders, Recurring

This task searches for draft orders having the configured tag, and duplicates each one (minus the tag used for searching). Optionally, this task can automatically send an invoice to the customer on file, after the new draft order is created. Or, this task can auto-complete the order, marking the order as paid if you so chose. (Auto-completed orders will result in an email receipt being sent to the customer on file for the original draft order.)

* View in the task library: [usemechanic.com/task/auto-recurring-draft-orders](https://usemechanic.com/task/auto-recurring-draft-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-recurring-draft-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "draft_order_tag__required": "repeat-me",
  "cycle_start_date__required": "2021-01-01",
  "number_of_days_in_cycle__number_required": "7",
  "complete_the_order_after_creating__boolean": null,
  "complete_the_order_and_mark_as_paid_after_creating__boolean": null,
  "send_email_invoice_after_creating__boolean": false,
  "email_invoice_subject": null,
  "email_invoice_bcc__email_array": null,
  "email_invoice_custom_message__multiline": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
{% if options.send_email_invoice_after_creating__boolean or options.complete_the_order_after_creating__boolean or options.complete_the_order_and_mark_as_paid_after_creating__boolean %}shopify/draft_orders/create{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task searches for draft orders having the configured tag, and duplicates each one (minus the tag used for searching). Optionally, this task can automatically send an invoice to the customer on file, after the new draft order is created. Or, this task can auto-complete the order, marking the order as paid if you so chose. (Auto-completed orders will result in an email receipt being sent to the customer on file for the original draft order.)

Run this task manually to scan and duplicate matching draft orders. Use the "run" task options to control automatic running of this task.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-recurring-draft-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-recurring-draft-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
