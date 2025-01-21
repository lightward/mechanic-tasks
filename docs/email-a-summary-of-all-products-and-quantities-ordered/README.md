# Email a summary of all products and quantities ordered

Tags: Email, Inventory, Products

Use this task to send yourself a quick tally of everything currently waiting in your order list. Super simple: just a list of products, and how many of each were ordered.

* View in the task library: [tasks.mechanic.dev/email-a-summary-of-all-products-and-quantities-ordered](https://tasks.mechanic.dev/email-a-summary-of-all-products-and-quantities-ordered)
* Task JSON, for direct import: [task.json](../../tasks/email-a-summary-of-all-products-and-quantities-ordered.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_include_open_orders__boolean": true,
  "only_include_fully_paid_orders__boolean": false,
  "only_include_fully_unfulfilled_orders__boolean": false,
  "count_quantities_by_variant_instead_of_by_product__boolean": false,
  "email_recipient__email_required": "",
  "email_subject__required": "Orders as of {{ \"now\" | date: \"%Y-%m-%d\" }}",
  "day_of_week_to_send_email__required": "Monday",
  "allow_sending_manually__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/{{ options.day_of_week_to_send_email__required | default: "monday" | downcase }}
{% if options.allow_sending_manually__boolean %}mechanic/user/trigger{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to send yourself a quick tally of everything currently waiting in your order list. Super simple: just a list of products, and how many of each were ordered.

Configure the task to only look at open, and/or fully paid, and/or fully unshipped orders. This task does not filter orders by when they were placed - only by their status.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-a-summary-of-all-products-and-quantities-ordered), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-summary-of-all-products-and-quantities-ordered.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
