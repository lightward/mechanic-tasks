# Demonstration: Bulk operation mutation

Tags: Bulk, Demonstration

This demonstration task runs through the full cycle of a Shopify bulk operation mutation to create two test products. Use it as a reference for offloading high-volume write operations to Shopify (e.g. product or inventory imports), and keep your Mechanic queue responsive and healthy.

* View in the task library: [tasks.mechanic.dev/demonstration-bulk-operation-mutation](https://tasks.mechanic.dev/demonstration-bulk-operation-mutation)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-bulk-operation-mutation.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/actions/perform
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This demonstration task runs through the full cycle of a Shopify bulk operation mutation to create two test products. Use it as a reference for offloading high-volume write operations to Shopify (e.g. product or inventory imports), and keep your Mechanic queue responsive and healthy.

As part of the bulk operation mutation cycle, the task performs the following sequential operations:
- requests a staged upload URL
- uploads a JSONL variables file with the data for the new products
- starts the bulk operation mutation
- logs the completed line-level results (or errors)

**IMPORTANT:** Review the [bulk operation mutations tutorial](https://learn.mechanic.dev/resources/tutorials/bulk-operation-mutations) in the Mechanic docs before adapting this demonstration task for use in a production shop.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-bulk-operation-mutation), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-bulk-operation-mutation.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
