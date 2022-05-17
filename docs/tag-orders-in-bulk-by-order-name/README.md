# Tag orders in bulk by order name

Tags: Auto-Tag, Bulk, Orders

Use this task to rapidly update your order list, by entering a set of order names (e.g. "#12345", often called order numbers) and the tags to apply to those orders.

* View in the task library: [tasks.mechanic.dev/tag-orders-in-bulk-by-order-name](https://tasks.mechanic.dev/tag-orders-in-bulk-by-order-name)
* Task JSON, for direct import: [task.json](../../tasks/tag-orders-in-bulk-by-order-name.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
mechanic/user/text
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to rapidly update your order list, by entering a set of order names (e.g. "#12345", often called order numbers) and the tags to apply to those orders.

Enter a list of order name + tag pairs, like so:

```
#12345:approved
#67890:approved
#11111:denied
```

Please note: the order name must be an exact match, including any prefixes and suffixes.

Mechanic will look up each order by name, and add the tag you specify. (If the tag is already present, Mechanic won't update the order.)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-orders-in-bulk-by-order-name), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-orders-in-bulk-by-order-name.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
