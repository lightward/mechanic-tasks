# Auto-tag orders that contain an out of stock item

Tags: Auto-Tag, Orders, Out of Stock

This task watches for newly-created orders, and checks each line item for that variant's total inventory quantity. If any are found with an inventory level of 0 or less, the task will add the tag of your choice to the order – and, optionally, will add a tag to the customer and to each product related to an out-of-stock line item.

* View in the task library: [usemechanic.com/task/auto-tag-orders-that-contain-an-out-of-stock-item](https://usemechanic.com/task/auto-tag-orders-that-contain-an-out-of-stock-item)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-that-contain-an-out-of-stock-item.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "apply_this_order_tag__required": "",
  "apply_this_customer_tag": null,
  "apply_this_product_tag_for_each_out_of_stock_line_item": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for newly-created orders, and checks each line item for that variant's total inventory quantity. If any are found with an inventory level of 0 or less, the task will add the tag of your choice to the order – and, optionally, will add a tag to the customer and to each product related to an out-of-stock line item.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-that-contain-an-out-of-stock-item), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-that-contain-an-out-of-stock-item.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
