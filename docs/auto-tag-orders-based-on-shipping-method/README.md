# Auto-tag orders based on shipping method

Tags: Auto-Tag, Orders, Shipping

Quickly identify and sort orders based on their shipping method, using automatic order tags. This task supports auto-tagging incoming orders, and can be run manually to tag historical orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-based-on-shipping-method](https://usemechanic.com/task/auto-tag-orders-based-on-shipping-method)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-based-on-shipping-method.json)
* Preview task code: [script.liquid](./script.liquid)

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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Quickly identify and sort orders based on their shipping method, using automatic order tags. This task supports auto-tagging incoming orders, and can be run manually to tag historical orders.

To use this task, populate the "Shipping method titles and tags" list with shipping method titles on the left, and order tags to apply on the right. In Shopify, shipping method titles are configured as "rates"; you can find yours by navigating to Settings > Shipping, then looking at the rates within each shipping zone.

This task will run automatically on incoming orders. Use the "Run task" button to scan and tag older orders. To process orders older than 60 days, [enable "Read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).

Enable "Allow partial matches for shipping method titles" for more flexibility. With this option enabled, Mechanic will look for the first value in the "Shipping method titles and tags" list that is found within the order's shipping method title, and apply the corresponding tag.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-based-on-shipping-method), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-based-on-shipping-method.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
