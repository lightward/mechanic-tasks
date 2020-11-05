# Tag orders that have at least x of a certain product

Use this task to monitor for orders that meet a certain quantity threshold, per line item or totaled up, optionally only looking at certain SKUs. Optionally, send yourself an email notification when such an order comes in.

* View in the task library: [usemechanic.com/task/tag-orders-that-have-at-least-x-of-a-certain-product](https://usemechanic.com/task/tag-orders-that-have-at-least-x-of-a-certain-product)
* Task JSON, for direct import: [task.json](../../tasks/tag-orders-that-have-at-least-x-of-a-certain-product.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_quantity_threshold__number_required": null,
  "evaluate_threshold_per_line_item__boolean": false,
  "only_monitor_these_skus__array": null,
  "order_tag_to_apply": null,
  "email_notification_recipient__email": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to monitor for orders that meet a certain quantity threshold, per line item or totaled up, optionally only looking at certain SKUs. Optionally, send yourself an email notification when such an order comes in.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/tag-orders-that-have-at-least-x-of-a-certain-product), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-orders-that-have-at-least-x-of-a-certain-product.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
