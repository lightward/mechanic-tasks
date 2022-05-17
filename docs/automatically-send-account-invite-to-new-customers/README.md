# Automatically send account invite to new customers

Tags: Customers, Email, Invite

This task keeps an eye on customers as you create or import them in Shopify, and automatically sends account invitations to any customers that have an email address.

* View in the task library: [tasks.mechanic.dev/automatically-send-account-invite-to-new-customers](https://tasks.mechanic.dev/automatically-send-account-invite-to-new-customers)
* Task JSON, for direct import: [task.json](../../tasks/automatically-send-account-invite-to-new-customers.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "invitation_email_subject__required": null,
  "invitation_email_body__multiline_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create+1.minute
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task keeps an eye on customers as you create or import them in Shopify, and automatically sends account invitations to any customers that have an email address.

This task sends account invitations to newly-created customers, whether created/imported through the Shopify admin or through another app. It does not send invitation emails for customers without an email address, or to customers who've signed up via your online store. (Wondering about the 1-minute delay? It's because customers who sign themselves up aren't marked as such until a few seconds after their account is created. So, Mechanic waits a minute, just to be sure.)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/automatically-send-account-invite-to-new-customers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-send-account-invite-to-new-customers.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
