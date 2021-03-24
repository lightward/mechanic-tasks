# Auto-tag new orders using the customer's tags

Tags: Auto-Tag, Orders, Customers

Use this task to apply the same categorizations you use for your customers. Useful for pre-approving customers, and then quickly sorting your orders based on that pre-approval. Optionally, configure this task to only copy certain tags from customers to their orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-using-the-customers-tags](https://usemechanic.com/task/auto-tag-orders-using-the-customers-tags)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-using-the-customers-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_copy_these_tags__array": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to apply the same categorizations you use for your customers. Useful for pre-approving customers, and then quickly sorting your orders based on that pre-approval. Optionally, configure this task to only copy certain tags from customers to their orders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-using-the-customers-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-using-the-customers-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
