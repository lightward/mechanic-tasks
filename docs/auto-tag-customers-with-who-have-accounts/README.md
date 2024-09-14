# Auto-tag customers with who have accounts

Tags: Account, Auto-Tag, Customers

This task runs automatically for individual customers, as they are created and updated. It will tag customers when they have an enabled account (i.e. have a registered email address and active password), and it will untag customers whose accounts are disabled.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-with-who-have-accounts](https://tasks.mechanic.dev/auto-tag-customers-with-who-have-accounts)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-with-who-have-accounts.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_apply__required": null,
  "test_mode__boolean": true
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

This task runs automatically for individual customers, as they are created and updated. It will tag customers when they have an enabled account (i.e. have a registered email address and active password), and it will untag customers whose accounts are disabled.

Run this task manually to scan all existing customers, tagging and untagging as appropriate.

Use test mode to have this task return information about what actions it would normally take.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-with-who-have-accounts), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-with-who-have-accounts.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
