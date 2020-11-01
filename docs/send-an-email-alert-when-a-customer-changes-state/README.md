# Send an email alert when a customer changes state

* [task.json](../../tasks/send-an-email-alert-when-a-customer-changes-state.json) (for import/export)
* [Task script](./script.liquid)

This task monitors for updates to a customer's state (account disabled, password set, invited, or invitation declined), and sends alert emails for any state changes you care about.

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

## Subscriptions

```liquid
shopify/customers/update
shopify/customers/create
```

## Documentation

This task monitors for updates to a customer's state (account disabled, password set, invited, or invitation declined), and sends alert emails for any state changes you care about.

This task monitors for updates to [a customer's state](https://help.shopify.com/en/api/graphql-admin-api/reference/enum/customerstate), and sends alert emails for any state changes you care about.

This task works by storing the customer's previous state, and comparing it to the new state. Therefore, this task cannot send emails for customers it hasn't seen before. This means that you may not see emails for some customers immediately after installing the task; emails will begin sending as customers are created and updated, allowing Mechanic to fill in its knowledge of customer state.
