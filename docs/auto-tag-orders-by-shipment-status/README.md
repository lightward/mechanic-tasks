# Auto-tag orders by shipment status

Tags: Auto-Tag, Shipping

Easily segment your orders by shipment status. Tagging your orders as "Delivered", or "Out for delivery", or "Attempted delivery", or any other status, allows you to stay on top of your order flow. And, adding these tags makes it easier to wire up additional automation, keeping the connection live between your customers and their orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-shipment-status](https://usemechanic.com/task/auto-tag-orders-by-shipment-status)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-shipment-status.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "shipping_statuses_and_tags__keyval_required": {
    "LABEL_PRINTED": "Shipping label printed",
    "LABEL_PURCHASED": "Shipping label purchased",
    "ATTEMPTED_DELIVERY": "Delivery attempted",
    "READY_FOR_PICKUP": "Delivery ready for pickup",
    "CONFIRMED": "Delivery confirmed",
    "IN_TRANSIT": "Delivery in transit",
    "OUT_FOR_DELIVERY": "Out for delivery",
    "DELIVERED": "Delivery complete",
    "FAILURE": "Delivery failed"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Easily segment your orders by shipment status. Tagging your orders as "Delivered", or "Out for delivery", or "Attempted delivery", or any other status, allows you to stay on top of your order flow. And, adding these tags makes it easier to wire up additional automation, keeping the connection live between your customers and their orders.

This task monitors fulfillments for your orders. Whenever a fulfillment is updated, this task removes any shipment-related tags that might already be on the order, then adds whatever tag is relevant for the current shipment status. If there are multiple fulfillments for the order, and they have different statuses, this task will add more than one tag. Use the "Run task" button to scan all orders. To process orders older than 60 days, [enable "Read all orders"](https://docs.usemechanic.com/article/375-enabling-read-all-orders).

This task comes pre-configured with friendly tags, but feel free to update the tag names on the right-hand side. Do not modify the labels on the left! These correspond directly to shipment statuses as they're recorded by Shopify.

For a complete description of all Shopify shipment statuses, [see Shopify's "shipment_status" documentation](https://help.shopify.com/en/api/reference/shipping-and-fulfillment/fulfillment#shipment-status-property).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-shipment-status), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-shipment-status.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
