# Keep SKUs up to date with barcodes

* [task.json](../../tasks/keep-skus-up-to-date-with-barcodes.json) (for import/export)
* [Task script](./script.liquid)

Included as a good example of keeping one attribute synced up with another, this task copies new barcode values over to the variant SKU, whenever a barcode is found and the SKU is out of date.

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

## Documentation

Included as a good example of keeping one attribute synced up with another, this task copies new barcode values over to the variant SKU, whenever a barcode is found and the SKU is out of date.

This task watches for new and updated products, copying variant barcodes over to the variant SKU. This occurs whenever a barcode is found, and the related variant's SKU does not already have that value.
