# Send an email alert when a variant hits 0 total inventory

Tags: Alert, Email, Inventory, Out of Stock, Products

Use this task to receive an immediate email alert, whenever a variant's total inventory hits 0, when added up across all locations.

* View in the task library: [usemechanic.com/task/send-an-email-alert-when-a-variant-hits-0-total-inventory](https://usemechanic.com/task/send-an-email-alert-when-a-variant-hits-0-total-inventory)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-when-a-variant-hits-0-total-inventory.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "\"VARIANT_TITLE\" has hit 0 inventory",
  "email_body__multiline_required": "Hello,\n\nThe variant \"VARIANT_TITLE\" is now at 0 inventory, totaled across all locations.\n\n<a href=\"VARIANT_ADMIN_URL\">Manage this variant in Shopify</a>\n\nThanks,\nMechanic, for  {{ shop.name }}",
  "email_recipient__email_required": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to receive an immediate email alert, whenever a variant's total inventory hits 0, when added up across all locations.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-email-alert-when-a-variant-hits-0-total-inventory), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-when-a-variant-hits-0-total-inventory.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
