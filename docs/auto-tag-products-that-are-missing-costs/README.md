# Auto-tag products that are missing costs

Tags: Auto-Tag, Costs, Products

Use this task to help you close in on the last few products that are missing cost values. Trigger this task manually to process your entire catalog, or let this task update tags as needed for products you create or update.

* View in the task library: [usemechanic.com/task/auto-tag-products-that-are-missing-costs](https://usemechanic.com/task/auto-tag-products-that-are-missing-costs)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-that-are-missing-costs.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_cost_missing__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to help you close in on the last few products that are missing cost values. Trigger this task manually to process your entire catalog, or let this task update tags as needed for products you create or update.

Use the "Run task" button to scan all products in your catalog. Or, create/update products as usual, and this task will maintain tagging accordingly.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-products-that-are-missing-costs), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-that-are-missing-costs.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
