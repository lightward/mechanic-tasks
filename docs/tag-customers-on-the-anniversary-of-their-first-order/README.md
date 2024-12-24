# Tag customers on the anniversary of their first order

Tags: Customers, Tag

Running daily, or manually, this task query for all customers if their __first__ order was a year or more ago and they do not yet have the configured tag to apply. Alternatively, you may choose to tag customers if their account was created at least a year ago.

* View in the task library: [tasks.mechanic.dev/tag-customers-on-the-anniversary-of-their-first-order](https://tasks.mechanic.dev/tag-customers-on-the-anniversary-of-their-first-order)
* Task JSON, for direct import: [task.json](../../tasks/tag-customers-on-the-anniversary-of-their-first-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_apply__required": null,
  "customer_search_query": null,
  "days_to_wait_before_tagging__number": null,
  "use_account_creation_date_instead_of_first_order_date__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Running daily, or manually, this task query for all customers if their __first__ order was a year or more ago and they do not yet have the configured tag to apply. Alternatively, you may choose to tag customers if their account was created at least a year ago.

Optionally, you may choose whether to wait a certain amount of days before tagging (i.e. a year + X days afterwards), and to configure a "Customer search query" with the **exact** same syntax used in the Customers segment search dialog.

For example:
* Use `customer_tags CONTAINS 'VIP'` for customers with the VIP tag
* Use `email_subscription_status = 'SUBSCRIBED'` for customers subscribed to email marketing
* Use `amount_spent >= 100` for customers who have spent more than 100 in the local shop currency

**Important**: The task will already include the appropriate search terms to filter customers by either their first order date or account creation date, so do not include that criteria if using the optional "Customer search query".

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-customers-on-the-anniversary-of-their-first-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-on-the-anniversary-of-their-first-order.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
