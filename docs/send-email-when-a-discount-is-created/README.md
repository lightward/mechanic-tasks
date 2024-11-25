# Send email when a discount is created

Tags: Discounts, Email

Use this task to send email notifications whenever discounts are created in your shop. Optionally, you may choose to monitor when specific apps create discounts.

* View in the task library: [tasks.mechanic.dev/send-email-when-a-discount-is-created](https://tasks.mechanic.dev/send-email-when-a-discount-is-created)
* Task JSON, for direct import: [task.json](../../tasks/send-email-when-a-discount-is-created.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipients__array_required": null,
  "app_names_to_monitor__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/discounts/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to send email notifications whenever discounts are created in your shop. Optionally, you may choose to monitor when specific apps create discounts.

Each notification will provide a summary of the discount with an admin link back to the full discount detail page.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-email-when-a-discount-is-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-email-when-a-discount-is-created.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
