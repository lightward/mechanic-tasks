# Remove matched tags from all products

Tags: Products, Untag

This task removes the matched tags from all products in your shop. Optionally, choose to remove partial tag matches as well (e.g. configured tag: "sale", matched tags: "sale", "sale 10", "on sale", etc.).

* View in the task library: [tasks.mechanic.dev/remove-specified-tags-from-all-products](https://tasks.mechanic.dev/remove-specified-tags-from-all-products)
* Task JSON, for direct import: [task.json](../../tasks/remove-specified-tags-from-all-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tags_list__required_array": null,
  "remove_partial_tag_matches__boolean": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task removes the matched tags from all products in your shop. Optionally, choose to remove partial tag matches as well (e.g. configured tag: "sale", matched tags: "sale", "sale 10", "on sale", etc.).

**Important!** - First run this task with "Test mode" enabled, and it will only log out the products and matched tags that it will delete, without making actual tag updates. This is especially important when choosing to remove partal tag matches.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/remove-specified-tags-from-all-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/remove-specified-tags-from-all-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
