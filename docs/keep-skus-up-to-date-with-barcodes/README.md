# Keep SKUs up to date with barcodes

Tags: Barcodes, Bulk, SKU

This task watches for new and updated products, copying variant barcodes over to the variants' inventory item SKUs. This occurs whenever a barcode is found, and the related SKU does not already have that value.

* View in the task library: [tasks.mechanic.dev/keep-skus-up-to-date-with-barcodes](https://tasks.mechanic.dev/keep-skus-up-to-date-with-barcodes)
* Task JSON, for direct import: [task.json](../../tasks/keep-skus-up-to-date-with-barcodes.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for new and updated products, copying variant barcodes over to the variants' inventory item SKUs. This occurs whenever a barcode is found, and the related SKU does not already have that value.

The task may also be run manually to scan all variants and inventory items in the shop, updating the unmatched SKUs as needed.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/keep-skus-up-to-date-with-barcodes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/keep-skus-up-to-date-with-barcodes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
