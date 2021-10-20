# Auto-tag new orders by staff member

Tags: Auto-Tag, Orders, Staff

Use this task to easily keep track of who's responsible for which orders. Works for draft orders, too!

* View in the task library: [usemechanic.com/task/auto-tag-new-orders-by-staff-member](https://usemechanic.com/task/auto-tag-new-orders-by-staff-member)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-by-staff-member.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_orders__boolean": true,
  "tag_draft_orders__boolean": true,
  "staff_names_and_tags__keyval_required": {
    "Jane Doe": "created-by-jane",
    "Zhang Wei": "created-by-zhang"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.tag_orders__boolean %}shopify/orders/create{% endif %}
{% if options.tag_draft_orders__boolean %}shopify/draft_orders/create{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to easily keep track of who's responsible for which orders. Works for draft orders, too!

To use this task, fill in the "Staff names and tags" option with staff names on the left, and the tags you'd like to apply on the right. Make sure to use each staff member's exact full name – it's case-sensitive! Tags will be applied as soon as the order or draft order is created.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-orders-by-staff-member), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-by-staff-member.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
