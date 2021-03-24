# Auto-tag draft orders by originating staff member

Tags: Auto-Tag, Draft Orders, Staff

Use this task to keep track of who created what draft order. This task watches for new draft orders, and tags each one with the name of the store staff member who created it. This task can also be run manually, to scan and tag all draft orders already in your store.

* View in the task library: [usemechanic.com/task/auto-tag-draft-orders-by-originating-staff-member](https://usemechanic.com/task/auto-tag-draft-orders-by-originating-staff-member)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-draft-orders-by-originating-staff-member.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_prefix": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/draft_orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to keep track of who created what draft order. This task watches for new draft orders, and tags each one with the name of the store staff member who created it. This task can also be run manually, to scan and tag all draft orders already in your store.

This task watches for new draft orders, that are created by store staff members, auto-tagging each new draft order with the name of the user who created it. Run this task manually to scan and tag all existing draft orders in your store.

[YouTube: Watch the development video!](https://youtu.be/6E-oEGeBumE)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-draft-orders-by-originating-staff-member), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-draft-orders-by-originating-staff-member.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
