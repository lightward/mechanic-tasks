# Tag customers on the anniversary of their first order

Tags: (not tagged!)

Running daily, or manually, this task scans all customers and tags them if their __first__ order was a year or more ago. Alternatively, you may choose to tag customers if their account was created at least a year ago.

* View in the task library: [usemechanic.com/task/tag-customers-on-the-anniversary-of-their-first-order](https://usemechanic.com/task/tag-customers-on-the-anniversary-of-their-first-order)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Running daily, or manually, this task scans all customers and tags them if their __first__ order was a year or more ago. Alternatively, you may choose to tag customers if their account was created at least a year ago.

Optionally, you may choose whether to wait a certain amount of days before tagging (i.e. a year + X days afterwards), and to configure a "Customer search query" with the same search query you might use in the Shopify admin area. For example:
* Use `tag:VIP` for customers with the VIP tag
* Use `accepts_marketing:true` for customers subscribed to email marketing
* Use `total_spent:>=100` for customers who have spent more than 100 in the local shop currency

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tag-customers-on-the-anniversary-of-their-first-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-customers-on-the-anniversary-of-their-first-order.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
