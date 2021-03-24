# Auto-tag customers that accept marketing

Tags: Auto-Tag, Customers, Marketing

Use this task to easily keep track of customers who accept marketing, adding a tag for those that do and removing it from customers who do not. Run this task manually to sync that tag for all customers.

* View in the task library: [usemechanic.com/task/auto-tag-customers-that-accept-marketing](https://usemechanic.com/task/auto-tag-customers-that-accept-marketing)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-that-accept-marketing.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_add__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/customers/create
shopify/customers/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to easily keep track of customers who accept marketing, adding a tag for those that do and removing it from customers who do not. Run this task manually to sync that tag for all customers.

Note: If you have many customers, running this task manually could take a long time!

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-that-accept-marketing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-that-accept-marketing.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
