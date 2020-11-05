# Auto-tag orders that do not have a certain tag

This task monitors for new and updated orders, adding a tag if a certain other tag is found missing. If and when the order does receive that certain other tag, the task's tag will be removed.

* View in the task library: [usemechanic.com/task/auto-tag-orders-that-do-not-have-a-certain-tag](https://usemechanic.com/task/auto-tag-orders-that-do-not-have-a-certain-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-do-not-have-a-certain-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_watch_for__required": null,
  "order_tag_to_add__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors for new and updated orders, adding a tag if a certain other tag is found missing. If and when the order does receive that certain other tag, the task's tag will be removed.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-that-do-not-have-a-certain-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-do-not-have-a-certain-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
