# Delete product or product variant metafields in bulk

Tags: Metafields, Bulk, Products

Use this task to delete all of your product or product variant metafields, optionally filtering by namespace or by namespace and key. This task will then delete all metafields found. This task comes with a test mode – use this first to make sure you're deleting the right things.

* View in the task library: [usemechanic.com/task/delete-product-or-product-variant-metafields-in-bulk](https://usemechanic.com/task/delete-product-or-product-variant-metafields-in-bulk)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to delete all of your product or product variant metafields, optionally filtering by namespace or by namespace and key. This task will then delete all metafields found. This task comes with a test mode – use this first to make sure you're deleting the right things.

With no configuration, this task will delete all product or product variant metafields. Configure it with a metafield namespace to only delete metafields with that namespace, or add both a namespace and key to get even more specific. Run this task with the test mode option enabled, the first time, to make sure you're deleting the right material.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/delete-product-or-product-variant-metafields-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-product-or-product-variant-metafields-in-bulk.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
