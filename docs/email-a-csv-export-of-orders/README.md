# Email a CSV export of orders

Tags: CSV, Email, Export, Orders

Use this task to generate and email a CSV of orders, including one row per line item. Filter with a search query or by tags, and auto-tag orders as they're exported. Run the export on demand, and/or nightly. This task is also useful as a template for further development.

* View in the task library: [usemechanic.com/task/email-a-csv-export-of-orders](https://usemechanic.com/task/email-a-csv-export-of-orders)
* Task JSON, for direct import: [task.json](../../tasks/email-a-csv-export-of-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "search_query_for_orders": "fulfillment_status:unshipped",
  "ignore_orders_with_this_tag": "exported",
  "add_this_tag_after_export": "exported",
  "export_email_recipient__email_required": "",
  "export_email_subject__required": "Unfulfilled orders for {{ \"now\" | date: \"%Y-%m-%d\" }}",
  "export_email_body__required_multiline": "Hello,\n\nPlease see the attachment for currently unfulfilled orders.\n\nThanks,\nMechanic, for {{ shop.name }}",
  "export_csv_filename__required": "unfulfilled-orders-{{ \"now\" | date: \"%Y-%m-%d\" }}",
  "run_export_nightly__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_export_nightly__boolean %}mechanic/scheduler/daily{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to generate and email a CSV of orders, including one row per line item. Filter with a search query or by tags, and auto-tag orders as they're exported. Run the export on demand, and/or nightly. This task is also useful as a template for further development.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-a-csv-export-of-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-a-csv-export-of-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
