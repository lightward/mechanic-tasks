# Auto-tag products without descriptions

Tags: Auto-Tag, Products

This task runs when products are updated, checking if they have a description, and tagging them if not. Once a description has been added, then the tag will be removed.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-without-descriptions](https://tasks.mechanic.dev/auto-tag-products-without-descriptions)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-without-descriptions.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_to_apply__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task runs when products are updated, checking if they have a description, and tagging them if not. Once a description has been added, then the tag will be removed.

You may also run the task manually to scan your entire product catalog,

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-without-descriptions), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-without-descriptions.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
