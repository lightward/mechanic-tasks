# Auto-tag products with their category

Tags: Auto-Tag, Category, Products

Use this task to tag products with their category from [Shopify's standard product taxonomy](https://shopify.github.io/product-taxonomy/releases/latest/). Run this task manually to scan every active product in your store. Optionally, set it to run daily to scan active products updated in the last day.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-with-their-category](https://tasks.mechanic.dev/auto-tag-products-with-their-category)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-with-their-category.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "apply_this_prefix_to_tags__required": "category: ",
  "run_task_daily__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_task_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to tag products with their category from [Shopify's standard product taxonomy](https://shopify.github.io/product-taxonomy/releases/latest/). Run this task manually to scan every active product in your store. Optionally, set it to run daily to scan active products updated in the last day.

Note: A tag prefix must be configured so the task will know which category tag(s) to remove from a product if applicable.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-with-their-category), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-with-their-category.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
