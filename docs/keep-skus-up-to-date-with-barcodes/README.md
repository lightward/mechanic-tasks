# Keep SKUs up to date with barcodes

Tags: Barcodes, SKU

Included as a good example of keeping one attribute synced up with another, this task copies new barcode values over to the variant SKU, whenever a barcode is found and the SKU is out of date.

* View in the task library: [usemechanic.com/task/keep-skus-up-to-date-with-barcodes](https://usemechanic.com/task/keep-skus-up-to-date-with-barcodes)
* Task JSON, for direct import: [task.json](../../tasks/keep-skus-up-to-date-with-barcodes.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Included as a good example of keeping one attribute synced up with another, this task copies new barcode values over to the variant SKU, whenever a barcode is found and the SKU is out of date.

This task watches for new and updated products, copying variant barcodes over to the variant SKU. This occurs whenever a barcode is found, and the related variant's SKU does not already have that value.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/keep-skus-up-to-date-with-barcodes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/keep-skus-up-to-date-with-barcodes.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
