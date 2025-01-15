# Send account invites to all customers in bulk

Tags: Account, Bulk, Customers, Invite

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

* View in the task library: [tasks.mechanic.dev/send-account-invites-to-all-customers-in-bulk](https://tasks.mechanic.dev/send-account-invites-to-all-customers-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/send-account-invites-to-all-customers-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_invite_customers_with_this_tag": "",
  "custom_subject": "",
  "custom_message__multiline": ""
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

**Note**: Account invitations are only intended to work with [classic customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/classic-customer-accounts).

This task sends the same Shopify-powered emails that are used when sending individual customer invitations, and uses the same Shopify email template. A custom subject and message are not required, but will be included when specified.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-account-invites-to-all-customers-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-account-invites-to-all-customers-in-bulk.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
