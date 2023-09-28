# Set product types by title keywords

Tags: Products

Use this task to quickly reset product types in bulk based on product titles. When run manually, it will query for all products in the shop and for each product with a matched keyword in the title, the task will assign the paired product type to it.

* View in the task library: [tasks.mechanic.dev/set-product-types-by-title-keywords](https://tasks.mechanic.dev/set-product-types-by-title-keywords)
* Task JSON, for direct import: [task.json](../../tasks/set-product-types-by-title-keywords.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_types_and_keywords__keyval_multiline_required": {
    "Shirts": "shirt\nt-shirt\ntee"
  }
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to quickly reset product types in bulk based on product titles. When run manually, it will query for all products in the shop and for each product with a matched keyword in the title, the task will assign the paired product type to it.

Configure the product types to set on the left, and the keyword(s) on the right. The task is pre-filled with a sample entry for "Shirts", which can be replaced if not needed.

**Notes:**
- The task will search for keywords in the order of entry in the task configuration, and it will stop once a match is made.
- If a product title does not contain any of the configured keywords, then that product will be ignored.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/set-product-types-by-title-keywords), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/set-product-types-by-title-keywords.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
