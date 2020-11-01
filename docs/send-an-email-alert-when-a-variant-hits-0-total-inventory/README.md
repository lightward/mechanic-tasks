# Send an email alert when a variant hits 0 total inventory

* [task.json](../../tasks/send-an-email-alert-when-a-variant-hits-0-total-inventory.json) (for import/export)
* [Task script](./script.liquid)

Use this task to receive an immediate email alert, whenever a variant's total inventory hits 0, when added up across all locations.

## Default options

```json
{
  "email_subject__required": "\"VARIANT_TITLE\" has hit 0 inventory",
  "email_body__multiline_required": "Hello,\n\nThe variant \"VARIANT_TITLE\" is now at 0 inventory, totaled across all locations.\n\n<a href=\"VARIANT_ADMIN_URL\">Manage this variant in Shopify</a>\n\nThanks,\nMechanic, for  {{ shop.name }}",
  "email_recipient__email_required": ""
}
```

## Subscriptions

```liquid
shopify/inventory_levels/update
```

## Documentation

Use this task to receive an immediate email alert, whenever a variant's total inventory hits 0, when added up across all locations.
