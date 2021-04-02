# Auto-tag customers that accept marketing

Tags: Auto-Tag, Customers, Marketing

Use this task to auto-tag customers whose marketing preferences have been updated, adding a tag for those that do accept marketing and removing it from customers who do not. Optionally, choose whether to limit tags to customers who have single or confirmed opt-in levels.

* View in the task library: [usemechanic.com/task/auto-tag-customers-that-accept-marketing](https://usemechanic.com/task/auto-tag-customers-that-accept-marketing)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-that-accept-marketing.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_add__required": null,
  "only_tag_confirmed_opt_ins__boolean": null,
  "tag_single_and_confirmed_opt_ins__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to auto-tag customers whose marketing preferences have been updated, adding a tag for those that do accept marketing and removing it from customers who do not. Optionally, choose whether to limit tags to customers who have single or confirmed opt-in levels.

Run this task manually to sync that tag for **ALL** customers that accept marketing (and if checked, with required opt-in level), regardless of their last marketing preference update. Note: If you have many customers, running this task manually could take a long time!

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-that-accept-marketing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-that-accept-marketing.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
