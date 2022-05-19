# Delete product or product variant metafields in bulk

Tags: Bulk, Metafields, Products

Use this task to delete all of your product or product variant metafields, optionally filtering by namespace or by namespace and key. This task will then delete all metafields found. This task comes with a test mode – use this first to make sure you're deleting the right things.

* View in the task library: [tasks.mechanic.dev/delete-product-or-product-variant-metafields-in-bulk](https://tasks.mechanic.dev/delete-product-or-product-variant-metafields-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/delete-product-or-product-variant-metafields-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "delete_product_metafields__boolean": true,
  "delete_product_variant_metafields__boolean": false,
  "metafield_namespace": "",
  "metafield_key": "",
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to delete all of your product or product variant metafields, optionally filtering by namespace or by namespace and key. This task will then delete all metafields found. This task comes with a test mode – use this first to make sure you're deleting the right things.

With no configuration, this task will delete all product or product variant metafields. Configure it with a metafield namespace to only delete metafields with that namespace, or add both a namespace and key to get even more specific. Run this task with the test mode option enabled, the first time, to make sure you're deleting the right material.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-product-or-product-variant-metafields-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-product-or-product-variant-metafields-in-bulk.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
