# Manage fulfillment shipment status using order tags

Tags: Fulfillment, Orders, Tag

Use this task to easily set the shipment status of your single-fulfillment orders. Just add a tag, and a new fulfillment event will be recorded, using the corresponding shipment status. Optionally, you may have the task attempt to fulfill the order first and may choose whether to send shipment status notifications to the customer.

* View in the task library: [usemechanic.com/task/manage-fulfillment-status-using-order-tags](https://usemechanic.com/task/manage-fulfillment-status-using-order-tags)
* Task JSON, for direct import: [task.json](../../tasks/manage-fulfillment-status-using-order-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "shipment_tags_and_status__keyval_required": {
    "shipment_label_printed": "label_printed",
    "shipment_label_purchased": "label_purchased",
    "shipment_attempted_delivery": "attempted_delivery",
    "shipment_ready_for_pickup": "ready_for_pickup",
    "shipment_confirmed": "confirmed",
    "shipment_in_transit": "in_transit",
    "shipment_out_for_delivery": "out_for_delivery",
    "shipment_delivered": "delivered",
    "shipment_failure": "failure"
  },
  "attempt_to_fulfill_the_order_before_tagging__boolean": false,
  "send_shipment_notifications_to_customer__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to easily set the shipment status of your single-fulfillment orders. Just add a tag, and a new fulfillment event will be recorded, using the corresponding shipment status. Optionally, you may have the task attempt to fulfill the order first and may choose whether to send shipment status notifications to the customer.

This task monitors order tags. For an order that has a single fulfillment, this task will update that fulfillment's shipment status according to the order's tags. If the fulfill option is chosen, this task will only attempt to fulfill orders with no prior fulfillments (e.g., it will ignore orders that have been fulfilled, then cancelled, and then tagged).

This task comes pre-configured with Shopify's shipment status identifiers on the right, and friendly order tags on the left. Feel free to update the tag names on the left-hand side. Do not modify the labels on the right! These must correspond directly to shipment statuses, as they're recorded by Shopify.

For a complete description of all Shopify shipment statuses, [see Shopify's "shipment_status" documentation](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentevent#status-property-2021-01).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/manage-fulfillment-status-using-order-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-fulfillment-status-using-order-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
