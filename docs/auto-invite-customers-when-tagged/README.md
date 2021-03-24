# Auto-invite customers when tagged

Tags: Invite, Tag, Email, Watch

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited. This task also supports sending invitations in bulk, to all tagged customers who haven't previously been invited.

* View in the task library: [usemechanic.com/task/auto-invite-customers-when-tagged](https://usemechanic.com/task/auto-invite-customers-when-tagged)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited. This task also supports sending invitations in bulk, to all tagged customers who haven't previously been invited.

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited.

Use the "Run task" button to send invites to all of your previously-uninvited customers who have the configured tag.

Invitation emails are sent using your store's account invite notification email template. [Learn how to update this template.](https://help.shopify.com/en/manual/sell-online/notifications/edit-template)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-invite-customers-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-invite-customers-when-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
