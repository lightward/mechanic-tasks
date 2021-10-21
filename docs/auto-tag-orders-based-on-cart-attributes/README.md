# Auto-tag orders based on cart attributes

Tags: Auto-Tag, Cart Attributes, Orders

Use this task to automatically categorize orders based on the cart attributes configured before checkout. Useful if you allow customers to supply extra information about their order, or if your cart has some hidden coding that adds cart attributes programatically.

* View in the task library: [usemechanic.com/task/auto-tag-orders-based-on-cart-attributes](https://usemechanic.com/task/auto-tag-orders-based-on-cart-attributes)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-based-on-cart-attributes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "cart_attribute_to_monitor__required": null,
  "cart_attribute_values_and_order_tags_to_add__keyval_required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically categorize orders based on the cart attributes configured before checkout. Useful if you allow customers to supply extra information about their order, or if your cart has some hidden coding that adds cart attributes programatically.

Configure the "Cart attribute to monitor" option with the exact name of the cart attribute in use. This value is case-sensitive, and must include any punctuation used in the actual cart attribute.

Configure the "Cart attribute values and order tags to add" option with an attribute value on the left, and a tag on the right, to be applied when the left-hand value is found on an order. Add as many value/tag pairs as you like. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-based-on-cart-attributes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-based-on-cart-attributes.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
