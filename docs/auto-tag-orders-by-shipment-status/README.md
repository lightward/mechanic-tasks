# Auto-tag orders by shipment status

Tags: Auto-Tag, Shipping

Easily segment your orders by shipment status. Tagging your orders as "Delivered", or "Out for delivery", or "Attempted delivery", or any other status, allows you to stay on top of your order flow. And, adding these tags makes it easier to wire up additional automation, keeping the connection live between your customers and their orders.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-by-shipment-status](https://tasks.mechanic.dev/auto-tag-orders-by-shipment-status)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-shipment-status.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "shipping_statuses_and_tags__keyval_required": {
    "ATTEMPTED_DELIVERY": "Delivery attempted",
    "CANCELED": "Fulfillment Canceled",
    "CONFIRMED": "Delivery confirmed",
    "DELIVERED": "Delivery complete",
    "FAILURE": "Delivery failed",
    "FULFILLED": "Fulfilled",
    "IN_TRANSIT": "Delivery in transit",
    "LABEL_PRINTED": "Shipping label printed",
    "LABEL_PURCHASED": "Shipping label purchased",
    "LABEL_VOIDED": "Shipping label voided",
    "MARKED_AS_FULFILLED": "Marked as fulfilled",
    "NOT_DELIVERED": "Not delivered",
    "OUT_FOR_DELIVERY": "Out for delivery",
    "PICKED_UP": "Picked up",
    "READY_FOR_PICKUP": "Delivery ready for pickup",
    "SUBMITTED": "Submitted"
  },
  "limit_to_orders_matching_this_query_for_manual_runs": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Easily segment your orders by shipment status. Tagging your orders as "Delivered", or "Out for delivery", or "Attempted delivery", or any other status, allows you to stay on top of your order flow. And, adding these tags makes it easier to wire up additional automation, keeping the connection live between your customers and their orders.

This task monitors fulfillments for your orders. Whenever a fulfillment is updated, this task removes any shipment-related tags that might already be on the order, then adds whatever tag is relevant for the current shipment status. If there are multiple fulfillments for the order, and they have different statuses, this task will add more than one tag. Use the "Run task" button to scan all orders. To process orders older than 60 days, [enable "Read all orders"](https://docs.usemechanic.com/article/375-enabling-read-all-orders).

This task comes pre-configured with friendly tags, but feel free to update the tag names on the right-hand side. Do not modify the labels on the left! These correspond directly to shipment statuses as they're recorded by Shopify.

For a reference on Shopify's fulfillment statuses, see the [FulfillmentDisplayStatus documentation](https://shopify.dev/docs/admin-api/graphql/reference/shipping-and-fulfillment/fulfillmentdisplaystatus). (More details may be available in the [REST documentation for Fulfillment.shipment_status](https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillment#shipment-status-property-2021-04).)

The "Limit to orders matching this query for manual runs" option uses the same query syntax as the "Orders" section of the Shopify admin area. For example, to only include paid orders, use this query:

financial_status:paid

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-by-shipment-status), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-shipment-status.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
