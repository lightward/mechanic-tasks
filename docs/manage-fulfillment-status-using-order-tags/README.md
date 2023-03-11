# Manage fulfillment shipment status using order tags

Tags: Fulfillment, Orders, Shipping, Tag

Use this task to easily set the shipment status on your fulfilled orders. Just add a tag, and new fulfillment events will be created, using the corresponding shipment status. Optionally, you may have the task attempt to fulfill the order first and may choose whether to send shipment status notifications to the customer.

* View in the task library: [tasks.mechanic.dev/manage-fulfillment-status-using-order-tags](https://tasks.mechanic.dev/manage-fulfillment-status-using-order-tags)
* Task JSON, for direct import: [task.json](../../tasks/manage-fulfillment-status-using-order-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "shipment_tags_and_status__keyval_required": {
    "shipment_attempted_delivery": "ATTEMPTED_DELIVERY",
    "shipment_confirmed": "CONFIRMED",
    "shipment_delivered": "DELIVERED",
    "shipment_failure": "FAILURE",
    "shipment_in_transit": "IN_TRANSIT",
    "shipment_label_printed": "LABEL_PRINTED",
    "shipment_label_purchased": "LABEL_PURCHASED",
    "shipment_out_for_delivery": "OUT_FOR_DELIVERY",
    "shipment_ready_for_pickup": "READY_FOR_PICKUP"
  },
  "attempt_to_fulfill_the_order_before_setting_shipment_status__boolean": false,
  "send_shipment_notifications_to_customer__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to easily set the shipment status on your fulfilled orders. Just add a tag, and new fulfillment events will be created, using the corresponding shipment status. Optionally, you may have the task attempt to fulfill the order first and may choose whether to send shipment status notifications to the customer.

This task comes preconfigured with Shopify's shipment status identifiers on the right, and friendly order tags on the left. Feel free to update the tag names on the left-hand side. **Do not modify the labels on the right!** These must correspond directly to Shopify [fulfillment event statuses](https://shopify.dev/docs/api/admin-graphql/2023-04/enums/FulfillmentEventStatus).

**Notes:**
- This task will fulfill all open fulfillment orders from any location, if it has been configured to attempt to fulfill first. This includes digital items (i.e. shipping not required). However, digital items will not have a shipment status set on them.
- When setting the shipment status, the task will use the first shipment tag it finds on the order. Be careful to remove any previous shipment tags before applying a new one, since Shopify auto-updates the order as soon as a tag is applied in admin.
- This task has no knowledge of the typical sequence of shipment progression. It is your responsibility to not inadvertently apply a shipment status tag to an order that has previously been updated to a "later" tag (e.g. setting "CONFIRMED" on an order that was already at "DELIVERED").

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/manage-fulfillment-status-using-order-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-fulfillment-status-using-order-tags.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
