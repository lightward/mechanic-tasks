# Forward incoming email to another address

Tags: Email

This task monitors for [incoming mail](https://learn.mechanic.dev/platform/email/receiving-email), sent directly to your Mechanic account, and forwards all of it (including attachments) to the address of your choice. (Note that only emails less than 10MB in total size will be sent.)

* View in the task library: [tasks.mechanic.dev/forward-incoming-email-to-another-address](https://tasks.mechanic.dev/forward-incoming-email-to-another-address)
* Task JSON, for direct import: [task.json](../../tasks/forward-incoming-email-to-another-address.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__email_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/emails/received
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors for [incoming mail](https://learn.mechanic.dev/platform/email/receiving-email), sent directly to your Mechanic account, and forwards all of it (including attachments) to the address of your choice. (Note that only emails less than 10MB in total size will be sent.)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/forward-incoming-email-to-another-address), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/forward-incoming-email-to-another-address.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
