# Auto-add default custom attributes to new orders

Tags: Order Attributes, Orders

Shopify allows orders to have custom attributes associated with them – and these attributes can be edited from within Shopify. Use this task to configure default attributes to be added to all new orders, providing an attribute name and (optionally) a value. Feel free to leave the value blank if you know you'll want to add your own values later, within Shopify.

* View in the task library: [tasks.mechanic.dev/auto-add-default-custom-attributes-to-new-orders](https://tasks.mechanic.dev/auto-add-default-custom-attributes-to-new-orders)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Shopify allows orders to have custom attributes associated with them – and these attributes can be edited from within Shopify. Use this task to configure default attributes to be added to all new orders, providing an attribute name and (optionally) a value. Feel free to leave the value blank if you know you'll want to add your own values later, within Shopify.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-default-custom-attributes-to-new-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-default-custom-attributes-to-new-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
