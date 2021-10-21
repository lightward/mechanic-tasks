# Auto-untag customers when a certain product is refunded

Tags: Customers, Refunds, Untag

Use this task to automatically remove a certain customer tag whenever a particular product is refunded, for that customer.

* View in the task library: [usemechanic.com/task/auto-untag-customers-when-a-certain-product-is-refunded](https://usemechanic.com/task/auto-untag-customers-when-a-certain-product-is-refunded)
* Task JSON, for direct import: [task.json](../../tasks/auto-untag-customers-when-a-certain-product-is-refunded.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_ids__number_array_required": null,
  "customer_tag_to_remove__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/refunds/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically remove a certain customer tag whenever a particular product is refunded, for that customer.

This task is configured with one or more product IDs ([learn how to find a product ID](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)), and with the customer tag to remove when one of those products is refunded.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-untag-customers-when-a-certain-product-is-refunded), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-untag-customers-when-a-certain-product-is-refunded.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
