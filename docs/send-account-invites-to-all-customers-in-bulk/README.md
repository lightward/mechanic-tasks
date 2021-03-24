# Send account invites to all customers in bulk

Tags: Account, Invite, Customers, Bulk

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

* View in the task library: [usemechanic.com/task/send-account-invites-to-all-customers-in-bulk](https://usemechanic.com/task/send-account-invites-to-all-customers-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/send-account-invites-to-all-customers-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_invite_customers_with_this_tag": null,
  "custom_subject": null,
  "custom_message__multiline": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to send out account invitations to all the customers you already have on file, with the push of a button. Optionally, filter by customer tag.

This task sends the same Shopify-powered emails that are used when sending individual customer invitations ([see Shopify's documentation](https://help.shopify.com/en/manual/customers/customer-accounts#individual-invites)), and uses the same Shopify email template. A custom subject and message are not required, but will be included when specified.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-account-invites-to-all-customers-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-account-invites-to-all-customers-in-bulk.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
