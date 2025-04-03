# Auto-reserve draft order items for X days

Tags: Draft Orders, Products, Reserve

Use this task to auto-reserve all of the line items for a set amount of time on qualifying new or updated draft orders. A common use case is when you have an app or service that is creating draft orders on your behalf and you want to make sure that the inventory for those orders is set aside if possible.

* View in the task library: [tasks.mechanic.dev/auto-reserve-draft-order-items-for-x-days](https://tasks.mechanic.dev/auto-reserve-draft-order-items-for-x-days)
* Task JSON, for direct import: [task.json](../../tasks/auto-reserve-draft-order-items-for-x-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "amount_of_days_to_reserve__number_required": null,
  "include_draft_orders_with_any_of_these_tags__array": [
    "RESERVE"
  ],
  "exclude_draft_orders_with_any_of_these_tags__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/draft_orders/create
shopify/draft_orders/update+10.seconds
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to auto-reserve all of the line items for a set amount of time on qualifying new or updated draft orders. A common use case is when you have an app or service that is creating draft orders on your behalf and you want to make sure that the inventory for those orders is set aside if possible.

Optionally, configure the task with one or more tags in the "Include draft orders with any of these tags" field, or configure the task with one or more tags in the "Exclude draft orders with any of these tags" field. Exclusion tags will be ignored if any inclusion tags are configured.

**Important notes:**

- **If no tags are configured, this task will attempt to reserve inventory on all new or updated draft orders**
- This task does not check the inventory of any line items before reserving them
- Line items can only be reserved at the default location configured in Shopify, since draft orders do not support location assignment
- The 10 second delay on the draft order update subscription should be left as configured to prevent interference with draft order completion events

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-reserve-draft-order-items-for-x-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-reserve-draft-order-items-for-x-days.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
