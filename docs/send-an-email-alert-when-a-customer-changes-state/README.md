# Send an email alert when a customer changes state

Tags: Email, Alert, Customers

This task monitors for updates to a customer's state (account disabled, password set, invited, or invitation declined), and sends alert emails for any state changes you care about.

* View in the task library: [usemechanic.com/task/send-an-email-alert-when-a-customer-changes-state](https://usemechanic.com/task/send-an-email-alert-when-a-customer-changes-state)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-alert-when-a-customer-changes-state.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_when_a_customer_declines_an_invitation__boolean": true,
  "email_when_a_customer_account_is_disabled__boolean": true,
  "email_when_a_customer_initially_sets_an_account_password__boolean": true,
  "email_when_a_customer_is_invited__boolean": true,
  "email_recipient__email_required": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/update
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors for updates to a customer's state (account disabled, password set, invited, or invitation declined), and sends alert emails for any state changes you care about.

This task monitors for updates to [a customer's state](https://help.shopify.com/en/api/graphql-admin-api/reference/enum/customerstate), and sends alert emails for any state changes you care about.

This task works by storing the customer's previous state, and comparing it to the new state. Therefore, this task cannot send emails for customers it hasn't seen before. This means that you may not see emails for some customers immediately after installing the task; emails will begin sending as customers are created and updated, allowing Mechanic to fill in its knowledge of customer state.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-email-alert-when-a-customer-changes-state), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-alert-when-a-customer-changes-state.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
