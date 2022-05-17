# Auto-tag orders created from drafts

Tags: Auto-Tag, Draft Orders, Orders

This task monitors for newly-created orders, and auto-tags any that were originally based on a Shopify draft order, using the tag of your choice.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-created-from-drafts](https://tasks.mechanic.dev/auto-tag-orders-created-from-drafts)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-created-from-drafts.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_add__required": "from-draft"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors for newly-created orders, and auto-tags any that were originally based on a Shopify draft order, using the tag of your choice.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-created-from-drafts), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-created-from-drafts.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
