# Auto-tag new customers by staff member

Use this task to easily keep track of who's responsible for manually creating new customers.

* View in the task library: [usemechanic.com/task/auto-tag-new-customers-by-staff-member](https://usemechanic.com/task/auto-tag-new-customers-by-staff-member)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-customers-by-staff-member.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "staff_names_and_tags__keyval_required": {
    "Jane Doe": "created-by-jane",
    "Zhang Wei": "created-by-zhang"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to easily keep track of who's responsible for manually creating new customers.

To use this task, fill in the "Staff names and tags" option with staff names on the left, and the tags you'd like to apply on the right. Make sure to use each staff member's exact full name – it's case-sensitive! Tags will be applied as soon as the customer is created.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-customers-by-staff-member), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-customers-by-staff-member.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
