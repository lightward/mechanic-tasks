# Auto-add the draft order ID to an order's attributes

When a new order is created from a draft order, this task will automatically add the draft order ID to the custom attributes of the new order.

* View in the task library: [usemechanic.com/task/auto-add-the-draft-order-id-to-an-orders-attributes](https://usemechanic.com/task/auto-add-the-draft-order-id-to-an-orders-attributes)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-the-draft-order-id-to-an-orders-attributes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_attribute_name_for_storing_the_draft_order_id__required": "Draft order ID"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

When a new order is created from a draft order, this task will automatically add the draft order ID to the custom attributes of the new order.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-add-the-draft-order-id-to-an-orders-attributes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-the-draft-order-id-to-an-orders-attributes.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
