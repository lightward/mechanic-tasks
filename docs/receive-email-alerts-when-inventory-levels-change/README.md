# Receive email alerts when inventory levels change

Tags: Alert, Email, Inventory

Use this task to receive immediate email notifications whenever inventory/stock levels are adjusted, whether manually or as a result of a transfer or customer order.

* View in the task library: [tasks.mechanic.dev/receive-email-alerts-when-inventory-levels-change](https://tasks.mechanic.dev/receive-email-alerts-when-inventory-levels-change)
* Task JSON, for direct import: [task.json](../../tasks/receive-email-alerts-when-inventory-levels-change.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__email_required": "",
  "email_subject__required": "DIFFERENCE inventory for SKU TITLE",
  "email_body__required_multiline": "Currently available inventory: AVAILABLE\nChanged by: DIFFERENCE\nLocation: LOCATION_NAME\n\nINVENTORY_HISTORY_LINK\nMANAGE_VARIANT_LINK\n\nThanks,\n{{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
shopify/inventory_levels/connect
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to receive immediate email notifications whenever inventory/stock levels are adjusted, whether manually or as a result of a transfer or customer order.

Please note: Mechanic will start sending emails the _second_ time inventory is adjusted for a particular item.

The following "replacement" variables are defined in the task code for usage within the email subject and body. If you wish to include any other additional information, then you will either need to modify the task code to create additional variables, or use a [GraphQL query directly in the task option field](https://learn.mechanic.dev/resources/converting-tasks-from-shopify-rest-to-graphql/conversion-resource-lookups-in-task-option-fields).
- AVAILABLE
- DIFFERENCE
- INVENTORY_HISTORY_LINK
- LOCATION_NAME
- MANAGE_VARIANT_LINK
- SKU
- TITLE

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/receive-email-alerts-when-inventory-levels-change), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/receive-email-alerts-when-inventory-levels-change.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
