# Auto-tag fulfilled orders by carrier

Tags: Auto-Tag, Fulfillment, Orders, Shipping

When an order is fulfilled, this task will scan the tracking information for each fulfillment. The name of each tracking company on file – i.e. the fulfillment carrier – will be used to look up a new order tag to apply, per the task's configuration.

* View in the task library: [usemechanic.com/task/auto-tag-fulfilled-orders-by-carrier](https://usemechanic.com/task/auto-tag-fulfilled-orders-by-carrier)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-fulfilled-orders-by-carrier.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "fulfillment_carriers_and_order_tags__keyval_required": {
    "DHL Global": "international"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/fulfilled
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

When an order is fulfilled, this task will scan the tracking information for each fulfillment. The name of each tracking company on file – i.e. the fulfillment carrier – will be used to look up a new order tag to apply, per the task's configuration.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-fulfilled-orders-by-carrier), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-fulfilled-orders-by-carrier.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
