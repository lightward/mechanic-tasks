# Manage fulfillment status using order tags

* [Task script](./script.liquid)

Use this task to easily set the shipment status of your single-fulfillment orders. Just add a tag, and a new fulfillment event will be recorded, using the corresponding shipment status.

## Default options

```json
{
  "shipping_status_tags__keyval_required": {
    "label_printed": "shipment_label_printed",
    "label_purchased": "shipment_label_purchased",
    "attempted_delivery": "shipment_attempted_delivery",
    "ready_for_pickup": "shipment_ready_for_pickup",
    "confirmed": "shipment_confirmed",
    "in_transit": "shipment_in_transit",
    "out_for_delivery": "shipment_out_for_delivery",
    "delivered": "shipment_delivered",
    "failure": "shipment_failure"
  }
}
```

## Subscriptions

```liquid
shopify/orders/updated
```

## Documentation

This task monitors order tags. For an order that has a single (non-cancelled) fulfillment, this task will update that fulfillment's shipment status according to the order's tags.

This task comes pre-configured with Shopify's shipment status identifiers on the right, and friendly order tags on the left. Feel free to update the tag names on the left-hand side. Do not modify the labels on the right! These must correspond directly to shipment statuses, as they're recorded by Shopify.

For a complete description of all Shopify shipment statuses, [see Shopify's "shipment_status" documentation](https://help.shopify.com/en/api/reference/shipping-and-fulfillment/fulfillment#shipment-status-property).