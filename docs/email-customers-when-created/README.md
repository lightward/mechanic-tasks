# Email customers when created

Tags: Customers, Email

Use this task to send a quick welcome email to customers, when they sign up or are otherwise created in your shop. Optionally, filter by customer tag to only send welcome emails to certain customers.

* View in the task library: [usemechanic.com/task/email-customers-when-created](https://usemechanic.com/task/email-customers-when-created)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to send a quick welcome email to customers, when they sign up or are otherwise created in your shop. Optionally, filter by customer tag to only send welcome emails to certain customers.

This task will send out your email to any customer when their account is created. This can happen when a customer signs themselves up, when you create their customer record within the store, when a new customer places an order, or for any other reason that a customer record is created.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-customers-when-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-customers-when-created.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
