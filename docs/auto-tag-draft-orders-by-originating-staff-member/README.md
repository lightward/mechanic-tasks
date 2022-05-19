# Auto-tag draft orders by originating staff member

Tags: Auto-Tag, Draft Orders, Staff

Use this task to keep track of who created what draft order. This task watches for new draft orders, and tags each one with the name of the store staff member who created it. This task can also be run manually, to scan and tag all draft orders already in your store.

* View in the task library: [tasks.mechanic.dev/auto-tag-draft-orders-by-originating-staff-member](https://tasks.mechanic.dev/auto-tag-draft-orders-by-originating-staff-member)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-draft-orders-by-originating-staff-member.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_prefix": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/draft_orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to keep track of who created what draft order. This task watches for new draft orders, and tags each one with the name of the store staff member who created it. This task can also be run manually, to scan and tag all draft orders already in your store.

This task watches for new draft orders, that are created by store staff members, auto-tagging each new draft order with the name of the user who created it. Run this task manually to scan and tag all existing draft orders in your store.

[YouTube: Watch the development video!](https://youtu.be/6E-oEGeBumE)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-draft-orders-by-originating-staff-member), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-draft-orders-by-originating-staff-member.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
