# Auto-tag orders with their line item properties

Tags: Auto-Tag, Line Item Properties, Orders

Use this task to tag incoming orders with all of the line item properties found on the order. Optionally, configure a list of property names to be included, or a list of property names to be excluded. This task can also be run manually to scan and tag historical orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-their-line-item-properties](https://usemechanic.com/task/auto-tag-orders-with-their-line-item-properties)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-their-line-item-properties.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "property_name_and_value_separator__required": "_",
  "include_only_these_property_names__array": [],
  "exclude_these_property_names__array": []
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to tag incoming orders with all of the line item properties found on the order. Optionally, configure a list of property names to be included, or a list of property names to be excluded. This task can also be run manually to scan and tag historical orders.

Change the "Property name and value separator" to change the way tags are built. Using a dash results in "Name-Value", an underscore results in "Name_Value", and a colon with a space yields "Name: Value". The task preview conveniently shows what a sample tag combo will look like.

Notes:
- Configuring any property names to include means the task will ignore the property names to exclude setting entirely.
- Because line item properties cannot change after order creation, this task does not remove any tags from orders.
- Shopify limits order tags to 40 characters in length. If a tag combo exceeds this limit it will not be set on the order.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-their-line-item-properties), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-their-line-item-properties.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
