# Auto-tag products that are missing costs

Tags: Auto-Tag, Costs, Products

Use this task to help you close in on the last few products that are missing cost values. Trigger this task manually to process your entire catalog, or let this task update tags as needed for products you create or update.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-that-are-missing-costs](https://tasks.mechanic.dev/auto-tag-products-that-are-missing-costs)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-that-are-missing-costs.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_cost_missing__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to help you close in on the last few products that are missing cost values. Trigger this task manually to process your entire catalog, or let this task update tags as needed for products you create or update.

Use the "Run task" button to scan all products in your catalog. Or, create/update products as usual, and this task will maintain tagging accordingly.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-that-are-missing-costs), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-that-are-missing-costs.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
