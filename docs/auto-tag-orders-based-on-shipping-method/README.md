# Auto-tag orders based on shipping method

* [task.json](../../tasks/auto-tag-orders-based-on-shipping-method.json) (for import/export)
* [Task script](./script.liquid)

Quickly identify and sort orders based on their shipping method, using automatic order tags. This task supports auto-tagging incoming orders, and can be run manually to tag historical orders.

## Default options

```json
{
  "shipping_method_titles_and_tags__keyval_required": {
    "Shipping Alpha": "alpha",
    "Shipping Beta": "beta",
    "Shipping Gamma": "gamma"
  },
  "allow_partial_matches_for_shipping_method_titles__boolean": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

## Documentation

Quickly identify and sort orders based on their shipping method, using automatic order tags. This task supports auto-tagging incoming orders, and can be run manually to tag historical orders.

To use this task, populate the "Shipping method titles and tags" list with shipping method titles on the left, and order tags to apply on the right. In Shopify, shipping method titles are configured as "rates"; you can find yours by navigating to Settings > Shipping, then looking at the rates within each shipping zone.

This task will run automatically on incoming orders. Use the "Run task" button to scan and tag older orders. To process orders older than 60 days, [enable "Read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).

Enable "Allow partial matches for shipping method titles" for more flexibility. With this option enabled, Mechanic will look for the first value in the "Shipping method titles and tags" list that is found within the order's shipping method title, and apply the corresponding tag.
