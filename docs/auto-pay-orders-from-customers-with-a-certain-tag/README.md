# Auto-pay orders from customers with a certain tag

Tags: Payment, Tag, Watch, Orders

Use this task to immediately bump orders, from certain customers, to "paid". Useful if you have a standing payment arrangement for certain customers. Optionally, auto-remove this tag from customers after auto-paying their order. Useful for using customer tags as one-time triggers for auto-payment.

* View in the task library: [usemechanic.com/task/auto-pay-orders-from-customers-with-a-certain-tag](https://usemechanic.com/task/auto-pay-orders-from-customers-with-a-certain-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-pay-orders-from-customers-with-a-certain-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_customer_tag__required": "autopay",
  "remove_tag_from_customer_after_processing_their_order__boolean": null
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

Use this task to immediately bump orders, from certain customers, to "paid". Useful if you have a standing payment arrangement for certain customers. Optionally, auto-remove this tag from customers after auto-paying their order. Useful for using customer tags as one-time triggers for auto-payment.

This task runs automatically for incoming orders. Run this task manually to scan your store's order history, processing orders that were previously placed. (To scan orders older than 60 days, [enable "Read all orders"](https://help.usemechanic.com/tutorials/enabling-read_all_orders).)

Enable the "Remove tag from customer after processing their order" option to have this task remove the required tag whenever this task marks an order of theirs as paid. (If run manually, this task will still mark all of the qualifying customer's orders as paid, not just one order.)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-pay-orders-from-customers-with-a-certain-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-pay-orders-from-customers-with-a-certain-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
