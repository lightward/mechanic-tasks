# Auto-tag orders by financial status

Tags: Auto-Tag, Financial Status, Orders

This task watches new and updated orders, and updates their tags according to their financial status.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-financial-status](https://usemechanic.com/task/auto-tag-orders-by-financial-status)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-financial-status.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "financial_statuses_and_tags__required_keyval": {
    "pending": "payment-pending",
    "authorized": "",
    "partially_paid": "",
    "paid": "",
    "partially_refunded": "",
    "refunded": "",
    "voided": ""
  },
  "remove_outdated_financial_status_tags__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches new and updated orders, and updates their tags according to their financial status.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-financial-status), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-financial-status.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
