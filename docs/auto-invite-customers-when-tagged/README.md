# Auto-invite customers when tagged

Tags: Email, Invite, Tag, Watch

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited. This task also supports sending invitations in bulk, to all tagged customers who haven't previously been invited.

* View in the task library: [tasks.mechanic.dev/auto-invite-customers-when-tagged](https://tasks.mechanic.dev/auto-invite-customers-when-tagged)
* Task JSON, for direct import: [task.json](../../tasks/auto-invite-customers-when-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_watch_for__required": "invite",
  "ignore_tag_case__boolean": true,
  "invitation_email_subject__required": "Your account is ready!",
  "invitation_email_body__multiline_required": "Your account for {{ shop.name }} has been pre-approved! Use the button below to get started."
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited. This task also supports sending invitations in bulk, to all tagged customers who haven't previously been invited.

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited.

Use the "Run task" button to send invites to all of your previously-uninvited customers who have the configured tag.

Invitation emails are sent using your store's account invite notification email template. [Learn how to update this template.](https://help.shopify.com/en/manual/sell-online/notifications/edit-template)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-invite-customers-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-invite-customers-when-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
