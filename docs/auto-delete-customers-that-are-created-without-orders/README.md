# Auto-delete customers that are created without orders

Tags: Customers, Delete, Orders

Useful for stores that are subjected to bot abuse, this task watches for newly-created customers, and deletes any that don't come with an associated order. Optionally, choose to ignore any customers that are created with a certain tag – helpful if you create customers yourself, via the Shopify admin.

* View in the task library: [tasks.mechanic.dev/auto-delete-customers-that-are-created-without-orders](https://tasks.mechanic.dev/auto-delete-customers-that-are-created-without-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-delete-customers-that-are-created-without-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "ignore_customers_having_this_tag": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Useful for stores that are subjected to bot abuse, this task watches for newly-created customers, and deletes any that don't come with an associated order. Optionally, choose to ignore any customers that are created with a certain tag – helpful if you create customers yourself, via the Shopify admin.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-delete-customers-that-are-created-without-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-delete-customers-that-are-created-without-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
