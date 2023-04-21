# Delete customer metafields in bulk

Tags: Bulk, Customers, Metafields

With no configuration, this task will delete all customer metafields in bulk. Configure it with a metafield namespace to only delete metafields with that namespace, or add both a namespace and key to get even more specific. Run this task with the test mode option enabled, the first time, to make sure you're deleting the right material.

* View in the task library: [tasks.mechanic.dev/delete-customer-metafields-in-bulk](https://tasks.mechanic.dev/delete-customer-metafields-in-bulk)
* Task JSON, for direct import: [task.json](../../tasks/delete-customer-metafields-in-bulk.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
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

With no configuration, this task will delete all customer metafields in bulk. Configure it with a metafield namespace to only delete metafields with that namespace, or add both a namespace and key to get even more specific. Run this task with the test mode option enabled, the first time, to make sure you're deleting the right material.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-customer-metafields-in-bulk), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-customer-metafields-in-bulk.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
