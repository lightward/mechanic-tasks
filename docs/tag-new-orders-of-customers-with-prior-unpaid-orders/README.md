# Tag new orders of customers with prior unpaid orders

Tags: Orders, Tag, Unpaid

Use this task to easily keep track of orders placed by customers that already have at least one unpaid order. When new orders are created and the customer has any existing authorized, partially paid, or pending payment orders, then the new order will get the configured tag.

* View in the task library: [tasks.mechanic.dev/tag-new-orders-of-customers-with-prior-unpaid-orders](https://tasks.mechanic.dev/tag-new-orders-of-customers-with-prior-unpaid-orders)
* Task JSON, for direct import: [task.json](../../tasks/tag-new-orders-of-customers-with-prior-unpaid-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "exclude_company_purchases__boolean": false,
  "order_tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to easily keep track of orders placed by customers that already have at least one unpaid order. When new orders are created and the customer has any existing authorized, partially paid, or pending payment orders, then the new order will get the configured tag.

Optionally, choose to exclude company purchases from tagging and consideration.

Note: By default, Mechanic only scans the last 60 days of order history. To change this, [enable the option in Mehanic's settings](https://learn.mechanic.dev/platform/shopify/read-all-orders#configuration).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-new-orders-of-customers-with-prior-unpaid-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-new-orders-of-customers-with-prior-unpaid-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
