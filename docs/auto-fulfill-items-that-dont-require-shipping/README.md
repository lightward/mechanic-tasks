# Auto-fulfill items that don't require shipping

Tags: Fulfillment, Orders

Useful for digital products, memberships, or anything else that needs to be fulfilled instantly. This task watches for paid orders, and auto-fulfills all line items that don't require shipping. Optionally, choose to wait until other shippable items are fulfilled, if any.

* View in the task library: [usemechanic.com/task/auto-fulfill-items-that-dont-require-shipping](https://usemechanic.com/task/auto-fulfill-items-that-dont-require-shipping)
* Task JSON, for direct import: [task.json](../../tasks/auto-fulfill-items-that-dont-require-shipping.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "wait_until_any_other_shippable_items_are_fulfilled__boolean": null,
  "ignore_products_with_this_tag": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
{% if options.wait_until_any_other_shippable_items_are_fulfilled__boolean %}
  shopify/orders/partially_fulfilled
  shopify/orders/fulfilled
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful for digital products, memberships, or anything else that needs to be fulfilled instantly. This task watches for paid orders, and auto-fulfills all line items that don't require shipping. Optionally, choose to wait until other shippable items are fulfilled, if any.

This task watches for paid orders, and auto-fulfills all line items that don't require shipping. Optionally, choose to wait until other shippable items are fulfilled, if any.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-fulfill-items-that-dont-require-shipping), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-fulfill-items-that-dont-require-shipping.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
