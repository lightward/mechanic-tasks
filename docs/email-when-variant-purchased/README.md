# Email someone when a certain variant is purchased

Tags: Email, Orders, Products

This task allows you to send an email to someone when a certain variant is purchased. Requires the variant ID.

* View in the task library: [tasks.mechanic.dev/email-when-variant-purchased](https://tasks.mechanic.dev/email-when-variant-purchased)
* Task JSON, for direct import: [task.json](../../tasks/email-when-variant-purchased.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_address__required": null,
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "reply_to_email_address": null,
  "variant_id__number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task allows you to send an email to someone when a certain variant is purchased. Requires the variant ID.

This task requires that you enter the variant ID. You can find the variant id using this method: 
https://help.shopify.com/en/themes/customization/products/variants/find-variant-id

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-when-variant-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-when-variant-purchased.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
