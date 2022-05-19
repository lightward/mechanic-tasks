# Delete cancelled orders after 48 hours

Tags: Delete, Orders

When an order is cancelled, this task waits 48 hours, and then permanently deletes the order. Simple as that! (Please note: if you only want to archive the cancelled order, not delete it, try a different task!)

* View in the task library: [tasks.mechanic.dev/delete-cancelled-orders-after-48-hours](https://tasks.mechanic.dev/delete-cancelled-orders-after-48-hours)
* Task JSON, for direct import: [task.json](../../tasks/delete-cancelled-orders-after-48-hours.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/updated
user/orders/delete_cancelled+48.hours
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When an order is cancelled, this task waits 48 hours, and then permanently deletes the order. Simple as that! (Please note: if you only want to archive the cancelled order, not delete it, try a different task!)

When an order is cancelled, this task waits 48 hours, and then permanently deletes the order. There is no undo for deleting an order, so make sure this is what you want!

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/delete-cancelled-orders-after-48-hours), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-cancelled-orders-after-48-hours.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
