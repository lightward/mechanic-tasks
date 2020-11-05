# Auto-tag a customer's first order

Watches for incoming orders that are the very first order on file for the related customer, and adds the tag of your choice.

* View in the task library: [usemechanic.com/task/auto-tag-a-customers-first-order](https://usemechanic.com/task/auto-tag-a-customers-first-order)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-a-customers-first-order.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_add__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Watches for incoming orders that are the very first order on file for the related customer, and adds the tag of your choice.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-a-customers-first-order), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-a-customers-first-order.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
