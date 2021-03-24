# Archive orders on delivery

Tags: Archive, Delivery, Orders

Don't keep your customers waiting! Stay on top of orders that have yet to be delivered, by auto-archiving every order once every item has reached the customer.

* View in the task library: [usemechanic.com/task/archive-orders-on-delivery](https://usemechanic.com/task/archive-orders-on-delivery)
* Task JSON, for direct import: [task.json](../../tasks/archive-orders-on-delivery.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/fulfillment_events/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Don't keep your customers waiting! Stay on top of orders that have yet to be delivered, by auto-archiving every order once every item has reached the customer.

This task monitors fulfillment events. Every time a fulfillment event occurs, every fulfillment in the related order is scanned - once each fulfillment reaches the "delivered" status, this task archives the order.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/archive-orders-on-delivery), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/archive-orders-on-delivery.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
