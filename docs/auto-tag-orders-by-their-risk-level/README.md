# Auto-tag orders by their risk level

Tags: Auto-Tag, Orders, Risk

This task applies the tag of your choice to orders, based on the highest risk level for each order. Run this task manually to tag all open orders in your shop, according to their respective risk levels.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-by-their-risk-level](https://tasks.mechanic.dev/auto-tag-orders-by-their-risk-level)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-their-risk-level.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "risk_levels_and_tags__keyval_required": {
    "Low": "low-risk",
    "Medium": "medium-risk",
    "High": "high-risk"
  }
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task applies the tag of your choice to orders, based on the highest risk level for each order. Run this task manually to tag all open orders in your shop, according to their respective risk levels.

Valid risk levels: LOW, MEDIUM, HIGH.

Feel free to remove a tag from this task's options, if you don't need it. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-by-their-risk-level), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-their-risk-level.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
