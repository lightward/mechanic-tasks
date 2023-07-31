# Send an email alert when a variant hits 0 total inventory

Tags: Alert, Email, Inventory, Out of Stock, Products

Use this task to receive an immediate email alert, whenever a variant's total inventory hits 0, when added up across all locations. You can limit alerts to a specific collection or publication (e.g. Online Store or POS). 

* View in the task library: [tasks.mechanic.dev/send-an-email-alert-when-a-variant-hits-0-total-inventory](https://tasks.mechanic.dev/send-an-email-alert-when-a-variant-hits-0-total-inventory)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-when-a-variant-hits-0-total-inventory.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "must_belong_to_collection_id": "",
  "must_be_published_to_publication_id": "",
  "email_subject__required": "\"VARIANT_TITLE\" has hit 0 inventory",
  "email_body__multiline_required": "Hello,\n\nThe variant \"VARIANT_TITLE\" is now at 0 inventory, totaled across all locations.\n\n<a href=\"VARIANT_ADMIN_URL\">Manage this variant in Shopify</a>\n\nThanks,\nMechanic, for  {{ shop.name }}",
  "email_recipient__email_required": ""
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to receive an immediate email alert, whenever a variant's total inventory hits 0, when added up across all locations. You can limit alerts to a specific collection or publication (e.g. Online Store or POS). 

**Notes:**
- You can filter by collection or publication, not both at the same time.
- Run the task manually to get the list of publication IDs for your shop.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-an-email-alert-when-a-variant-hits-0-total-inventory), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-when-a-variant-hits-0-total-inventory.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
