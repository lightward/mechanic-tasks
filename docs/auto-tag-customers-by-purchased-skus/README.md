# Auto-tag customers by purchased SKUs

Tags: Auto-Tag, Customers, SKU

Use this task to keep customers tagged with the SKUs of the products they've purchased, optionally ignoring product purchases that have been refunded. Add a tag prefix to make SKU tags easy to distinguish from your other customer tags. This task also stores all purchased SKUs in a customer metafield, dodging the 250 tag limit that exists for customers.

* View in the task library: [usemechanic.com/task/auto-tag-customers-by-purchased-skus](https://usemechanic.com/task/auto-tag-customers-by-purchased-skus)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-by-purchased-skus.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_prefix": "",
  "ignore_refunded_purchases__boolean": true,
  "enable_running_manually__boolean": null,
  "customer_query_when_running_manually": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid

{% if options.ignore_refunded_purchases__boolean %}
  shopify/refunds/create
{% endif %}

{% if options.enable_running_manually__boolean %}
  mechanic/user/trigger
  mechanic/shopify/bulk_operation
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to keep customers tagged with the SKUs of the products they've purchased, optionally ignoring product purchases that have been refunded. Add a tag prefix to make SKU tags easy to distinguish from your other customer tags. This task also stores all purchased SKUs in a customer metafield, dodging the 250 tag limit that exists for customers.

This task keeps customers tagged with the SKUs of the products they've purchased, optionally ignoring product purchases that have been refunded. Add a tag prefix to make SKU tags easy to distinguish from your other customer tags.

This task also records all purchased SKUs in a JSON metafield called "mechanic.purchased_skus", associated with the customer. For customers who have purchased more products than would fit inside Shopify's maximum tag limit of 250, this metafield provides a way for you to access _all_ purchased SKUs.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-by-purchased-skus), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-by-purchased-skus.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
