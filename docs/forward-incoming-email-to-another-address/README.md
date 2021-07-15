# Forward incoming email to another address

Tags: Email

This task monitors for [incoming mail](https://learn.mechanic.dev/platform/email/receiving-email), sent directly to your Mechanic account, and forwards all of it (including attachments) to the address of your choice. (Note that only emails less than 10MB in total size will be sent.)

* View in the task library: [usemechanic.com/task/forward-incoming-email-to-another-address](https://usemechanic.com/task/forward-incoming-email-to-another-address)
* Task JSON, for direct import: [task.json](../../tasks/forward-incoming-email-to-another-address.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__email_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/emails/received
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors for [incoming mail](https://learn.mechanic.dev/platform/email/receiving-email), sent directly to your Mechanic account, and forwards all of it (including attachments) to the address of your choice. (Note that only emails less than 10MB in total size will be sent.)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/forward-incoming-email-to-another-address), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/forward-incoming-email-to-another-address.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
