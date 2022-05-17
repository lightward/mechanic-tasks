# Auto-tag new orders using the customer's tags

Tags: Auto-Tag, Customers, Orders

Use this task to apply the same categorizations you use for your customers. Useful for pre-approving customers, and then quickly sorting your orders based on that pre-approval. Optionally, configure this task to only copy certain tags from customers to their orders.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-using-the-customers-tags](https://tasks.mechanic.dev/auto-tag-orders-using-the-customers-tags)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-using-the-customers-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_copy_these_tags__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to apply the same categorizations you use for your customers. Useful for pre-approving customers, and then quickly sorting your orders based on that pre-approval. Optionally, configure this task to only copy certain tags from customers to their orders.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-using-the-customers-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-using-the-customers-tags.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
