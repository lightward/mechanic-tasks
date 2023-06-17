# Copy draft order metafields to orders

Tags: Draft Orders, Metafields, Orders

This task will watch for orders created from draft, copying over any metafields to the order that match the ones configured in this task. If the "Copy all metafields" option is checked, then it will skip the matching and instead just copy any metafields that exist on the draft order.

* View in the task library: [tasks.mechanic.dev/copy-draft-order-metafields-to-orders](https://tasks.mechanic.dev/copy-draft-order-metafields-to-orders)
* Task JSON, for direct import: [task.json](../../tasks/copy-draft-order-metafields-to-orders.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafields_to_copy__array": [
    "sample.change_me"
  ],
  "copy_all_metafields__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/order
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will watch for orders created from draft, copying over any metafields to the order that match the ones configured in this task. If the "Copy all metafields" option is checked, then it will skip the matching and instead just copy any metafields that exist on the draft order.

When configuring metafields to copy, they should be entered as **namespace.key** (e.g. "custom.estimated_ship_date").

Orders may also be sent individually to this task from an admin link. Caution when using this feature though, as this task does not check if the metafields already exist on the order nor if the values are different; it will just overwrite them.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/copy-draft-order-metafields-to-orders), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/copy-draft-order-metafields-to-orders.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
