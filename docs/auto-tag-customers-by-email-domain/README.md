# Auto-tag customers based on email domain

Tags: Auto-Tag, Customers

This task runs when customers are created, and it applies a tag if they have one of the configured email domains.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-by-email-domain](https://tasks.mechanic.dev/auto-tag-customers-by-email-domain)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-by-email-domain.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_email_domains__required_array": [
    "example.com"
  ],
  "customer_tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs when customers are created, and it applies a tag if they have one of the configured email domains.

Use the "Run task" button to scan all customers already registered.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-by-email-domain), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-by-email-domain.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
