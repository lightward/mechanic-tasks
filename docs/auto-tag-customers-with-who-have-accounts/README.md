# Auto-tag customers with who have accounts

This task monitors customer accounts, and applies the tag of your choice to customers that have an enabled account, with a registered email address and active password. It untags customers whose accounts are disabled. This task can be run manually to tag/untag all existing customers.

* View in the task library: [usemechanic.com/task/auto-tag-customers-with-who-have-accounts](https://usemechanic.com/task/auto-tag-customers-with-who-have-accounts)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-with-who-have-accounts.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_apply__required": null,
  "test_mode__boolean": true
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

This task monitors customer accounts, and applies the tag of your choice to customers that have an enabled account, with a registered email address and active password. It untags customers whose accounts are disabled. This task can be run manually to tag/untag all existing customers.

This task runs automatically for individual customers, as they are created and updated. It will tag customers when they have an enabled account (i.e. have a registered email address and active password), and it will untag customers whose accounts are disabled.

Run this task manually to scan all existing customers, tagging and untagging as appropriate.

Use test mode to have this task return information about what actions it would normally take.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-with-who-have-accounts), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-with-who-have-accounts.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
