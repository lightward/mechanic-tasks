# Send an email to all customers

Tags: Customers, Email

Use this task to easily contact all of your customers at once, optionally filtering by customer tag. Important: This task can only be used in a transactional context - it cannot be used be used for marketing emails, or any type of message that would require an unsubscribe link.

* View in the task library: [tasks.mechanic.dev/send-an-email-to-all-customers](https://tasks.mechanic.dev/send-an-email-to-all-customers)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-to-all-customers.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_send_to_customers_having_this_tag": null,
  "email_subject__required": null,
  "email_body__required_multiline": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to easily contact all of your customers at once, optionally filtering by customer tag. Important: This task can only be used in a transactional context - it cannot be used be used for marketing emails, or any type of message that would require an unsubscribe link.

This task will send your preconfigured email to all of your customers, optionally filtering by preconfigured tag. Make sure to double-check your task configuration before sending! Use test mode to receive a list of customers who will receive your email, before running without it.

**Important: This task can only be used in a transactional context - it cannot be used be used for marketing emails, or any type of message that would require an unsubscribe link.** [Read more: What kind of email can I send with Mechanic?](https://help.usemechanic.com/en/articles/3140336-what-kind-of-email-can-i-send-with-mechanic)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-an-email-to-all-customers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-to-all-customers.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
