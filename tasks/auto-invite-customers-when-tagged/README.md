# Auto-invite customers when tagged

* [Task script](./script.liquid)

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited. This task also supports sending invitations in bulk, to all tagged customers who haven't previously been invited.

## Default options

```json
{
  "tag_to_watch_for__required": "invite",
  "ignore_tag_case__boolean": true,
  "invitation_email_subject__required": "Your account is ready!",
  "invitation_email_body__multiline_required": "Your account for {{ shop.name }} has been pre-approved! Use the button below to get started."
}
```

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
```

## Documentation

This task watches for updates to customers, and sends invites for any customer who has the tag you choose, who hasn't previously been invited.

Use the "Run task" button to send invites to all of your previously-uninvited customers who have the configured tag.

Invitation emails are sent using your store's account invite notification email template. [Learn how to update this template.](https://help.shopify.com/en/manual/sell-online/notifications/edit-template)