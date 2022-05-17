# Auto-tag customers that accept marketing

Tags: Auto-Tag, Customers, Marketing

Use this task to auto-tag customers whose marketing preferences have been updated, adding a tag for those that do accept marketing and removing it from customers who do not. Optionally, choose whether to limit tags to customers who have single or confirmed opt-in levels. Run this task manually to scan all customers at once.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-that-accept-marketing](https://tasks.mechanic.dev/auto-tag-customers-that-accept-marketing)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to auto-tag customers whose marketing preferences have been updated, adding a tag for those that do accept marketing and removing it from customers who do not. Optionally, choose whether to limit tags to customers who have single or confirmed opt-in levels. Run this task manually to scan all customers at once.

[Learn more from Shopify](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/customer-emails#enable-double-opt-in-for-subscribers) about confirmed opt-in (aka double opt-in), and how to configure this for your store.

Note: Running this task manually will sync that tag for **ALL** customers that accept marketing (and if checked, with required opt-in level), regardless of when their marketing preferences were last updated. If you have many customers, running this task manually could take a long time!

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-that-accept-marketing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-that-accept-marketing.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
