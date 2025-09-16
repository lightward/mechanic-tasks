# Send email notification when items are returned

Tags: Alert, Email, Returns

Use this task to get an email alert with a list of the returned items whenever a return is marked as closed.

* View in the task library: [tasks.mechanic.dev/send-email-notification-when-items-are-returned](https://tasks.mechanic.dev/send-email-notification-when-items-are-returned)
* Task JSON, for direct import: [task.json](../../tasks/send-email-notification-when-items-are-returned.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipients__array_required": null,
  "include_pos_returns__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/returns/close
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to get an email alert with a list of the returned items whenever a return is marked as closed.

Optionally, enable "Include POS returns" if you would like return notifications for the Shopify Point of Sale channel as well.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-email-notification-when-items-are-returned), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-email-notification-when-items-are-returned.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
