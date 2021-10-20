# Auto-tag new orders using Liquid

Tags: Auto-Tag, Orders

This task offers an introduction to using Liquid to dynamically update your orders. This task comes with example Liquid code, showing you how to tag an order as "even" or "odd", based on whether the order number is even or odd; replace this Liquid with whatever suits your purposes. :)

* View in the task library: [usemechanic.com/task/auto-tag-new-orders-using-liquid](https://usemechanic.com/task/auto-tag-new-orders-using-liquid)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-using-liquid.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_value__code_multiline_required": "{% comment %}\n  This is an example! It calculates whether or not the order number\n  is even, and tags the order accordingly.\n{% endcomment %}\n\n{% assign mod = order.number | modulo: 2 %}\n\n{% if mod == 0 %}\n  even\n{% else %}\n  odd\n{% endif %}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task offers an introduction to using Liquid to dynamically update your orders. This task comes with example Liquid code, showing you how to tag an order as "even" or "odd", based on whether the order number is even or odd; replace this Liquid with whatever suits your purposes. :)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-orders-using-liquid), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-using-liquid.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
