# Calculate total quantities purchased by SKU

Tags: Orders, Products, SKU

This task scans all orders, regardless of status, and counts up the lifetime quantity purchased for each SKU, listing each SKU with its quantity and all related order names. This task demonstrates Shopify's bulk operations API.

* View in the task library: [tasks.mechanic.dev/calculate-total-quantities-purchased-by-sku](https://tasks.mechanic.dev/calculate-total-quantities-purchased-by-sku)
* Task JSON, for direct import: [task.json](../../tasks/calculate-total-quantities-purchased-by-sku.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task scans all orders, regardless of status, and counts up the lifetime quantity purchased for each SKU, listing each SKU with its quantity and all related order names. This task demonstrates Shopify's bulk operations API.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/calculate-total-quantities-purchased-by-sku), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/calculate-total-quantities-purchased-by-sku.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
