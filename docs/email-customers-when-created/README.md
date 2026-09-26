# Email customers when created

Tags: Customers, Email

Use this task to send a quick welcome email to customers, when they sign up or are otherwise created in your shop. Optionally, filter by customer tag to only send welcome emails to certain customers.

* View in the task library: [tasks.mechanic.dev/email-customers-when-created](https://tasks.mechanic.dev/email-customers-when-created)
* Task JSON, for direct import: [task.json](../../tasks/email-customers-when-created.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_customer_tag": null,
  "email_subject__required": null,
  "email_body__multiline_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to send a quick welcome email to customers, when they sign up or are otherwise created in your shop. Optionally, filter by customer tag to only send welcome emails to certain customers.

This task will send out your email to any customer when their account is created. This can happen when a customer signs themselves up, when you create their customer record within the store, when a new customer places an order, or for any other reason that a customer record is created.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-customers-when-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-customers-when-created.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
