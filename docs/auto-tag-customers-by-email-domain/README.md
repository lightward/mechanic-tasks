# Auto-tag customers based on email domain

Tags: Auto-Tag, Customers

Useful in a million scenarios. The merchant who requested this task has discounts set up based on customer tag, and they're using this task to guarantee that qualifying customers see their discount immediately – even if they just signed up!

* View in the task library: [usemechanic.com/task/auto-tag-customers-by-email-domain](https://usemechanic.com/task/auto-tag-customers-by-email-domain)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful in a million scenarios. The merchant who requested this task has discounts set up based on customer tag, and they're using this task to guarantee that qualifying customers see their discount immediately – even if they just signed up!

This task runs when customers are created. Use the "Run task" button to scan all customers already registered.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-by-email-domain), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-by-email-domain.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
