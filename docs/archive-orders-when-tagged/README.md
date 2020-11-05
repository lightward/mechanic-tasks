# Archive orders when tagged

Add a tag, have the order automatically archived/closed. Simple. :)

* View in the task library: [usemechanic.com/task/archive-orders-when-tagged](https://usemechanic.com/task/archive-orders-when-tagged)
* Task JSON, for direct import: [task.json](../../tasks/archive-orders-when-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_tag__required": "archive-me",
  "allow_manual_unarchiving_of_orders__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Add a tag, have the order automatically archived/closed. Simple. :)

This task monitors for new and updated orders, watching for the tag of your choice to be added. When the tag is found, this task will make sure the order is archived/closed.

Run this task manually to scan your older orders, archiving any that match your tag.

Enable "Allow manually unarchiving of orders" to have this task add a metafield to each order, as it archives them. The task will use this metafield as a reminder to _not_ archive those orders in the future, regardless of what happens to them.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/archive-orders-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/archive-orders-when-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
