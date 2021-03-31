# Auto-add default custom attributes to new orders

Tags: Order Attributes, Orders

Shopify allows orders to have custom attributes associated with them – and these attributes can be edited from within Shopify. Use this task to configure default attributes to be added to all new orders, providing an attribute name and (optionally) a value. Feel free to leave the value blank if you know you'll want to add your own values later, within Shopify.

* View in the task library: [usemechanic.com/task/auto-add-default-custom-attributes-to-new-orders](https://usemechanic.com/task/auto-add-default-custom-attributes-to-new-orders)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-default-custom-attributes-to-new-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "default_order_attributes_to_add__keyval_required": {
    "Assigned CSM": ""
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Shopify allows orders to have custom attributes associated with them – and these attributes can be edited from within Shopify. Use this task to configure default attributes to be added to all new orders, providing an attribute name and (optionally) a value. Feel free to leave the value blank if you know you'll want to add your own values later, within Shopify.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-add-default-custom-attributes-to-new-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-default-custom-attributes-to-new-orders.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
