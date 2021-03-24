# Auto-cancel fulfillments when an order is tagged

Tags: Cancel, Fulfillment, Tag, Watch

Useful when you discover that an order shouldn't have been fulfilled at all. :) After choosing an order tag in this task's configuration, add that tag to any order to have its fulfillments all cancelled, and the tag removed.

* View in the task library: [usemechanic.com/task/auto-cancel-fulfillments-when-an-order-is-tagged](https://usemechanic.com/task/auto-cancel-fulfillments-when-an-order-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/auto-cancel-fulfillments-when-an-order-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_order_tag__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
user/orders/cancel_fulfillment
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful when you discover that an order shouldn't have been fulfilled at all. :) After choosing an order tag in this task's configuration, add that tag to any order to have its fulfillments all cancelled, and the tag removed.

This task runs when an order is updated. When the tag of your choice is found in the order's tag list, all of its fulfillments (if any) will be cancelled, and the aforementioned tag will be removed.

Notes:

* Shopify requires a delay between fulfillment cancellations. For this reason, for orders with more than one fulfillment, this task waits one minute between successive fulfillment cancellations.
* If the configured tag is added to an order with no fulfillments, the tag _will_ be auto-removed, regardless.
* If an older order happens to be updated, and it already has the configured tag, this task will process the order as if the tag was just added.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-cancel-fulfillments-when-an-order-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-cancel-fulfillments-when-an-order-is-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
