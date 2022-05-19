# Auto-tag orders with customer tags when new customer tags are added

Tags: Auto-Tag, Customers, Orders

Activating this task will automatically keep the order tags up to date with the customer's tags.

* View in the task library: [tasks.mechanic.dev/tag-orders-with-customer-tags-when-customer-is-tagged](https://tasks.mechanic.dev/tag-orders-with-customer-tags-when-customer-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/tag-orders-with-customer-tags-when-customer-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/customers/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Activating this task will automatically keep the order tags up to date with the customer's tags.

When a customer is updated, this task will go through each of that customer's past orders and add all of the customer's current tags as order tags (if any new tags are found).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-orders-with-customer-tags-when-customer-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-orders-with-customer-tags-when-customer-is-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
