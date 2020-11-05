# Email someone when a certain variant is purchased

This task allows you to send an email to someone when a certain variant is purchased. Requires the variant ID.

* View in the task library: [usemechanic.com/task/email-when-variant-purchased](https://usemechanic.com/task/email-when-variant-purchased)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task allows you to send an email to someone when a certain variant is purchased. Requires the variant ID.

This task requires that you enter the variant ID. You can find the variant id using this method: 
https://help.shopify.com/en/themes/customization/products/variants/find-variant-id

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-when-variant-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-when-variant-purchased.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
