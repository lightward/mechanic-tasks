# Automatically send account invite to new customers

This task keeps an eye on customers as you create or import them in Shopify, and automatically sends account invitations to any customers that have an email address.

* View in the task library: [usemechanic.com/task/automatically-send-account-invite-to-new-customers](https://usemechanic.com/task/automatically-send-account-invite-to-new-customers)
* Task JSON, for direct import: [task.json](../../tasks/automatically-send-account-invite-to-new-customers.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "invitation_email_subject__required": null,
  "invitation_email_body__multiline_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create+1.minute
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task keeps an eye on customers as you create or import them in Shopify, and automatically sends account invitations to any customers that have an email address.

This task sends account invitations to newly-created customers, whether created/imported through the Shopify admin or through another app. It does not send invitation emails for customers without an email address, or to customers who've signed up via your online store. (Wondering about the 1-minute delay? It's because customers who sign themselves up aren't marked as such until a few seconds after their account is created. So, Mechanic waits a minute, just to be sure.)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/automatically-send-account-invite-to-new-customers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/automatically-send-account-invite-to-new-customers.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
