# Auto-capture payments when an order is created

Tags: Orders, Payment

This task runs immediately after an order is created, and captures an authorized transaction if one is present. Choose which risk levels to capture for, and optionally choose to filter by order tag. You may also choose to only capture funds for line items that do not require shipping.

* View in the task library: [usemechanic.com/task/auto-capture-payments-when-an-order-is-created](https://usemechanic.com/task/auto-capture-payments-when-an-order-is-created)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-payments-when-an-order-is-created.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "number_of_minutes_to_wait_before_capturing__number": null,
  "capture_orders_with_a_high_risk_level__boolean": true,
  "capture_orders_with_a_medium_risk_level__boolean": true,
  "capture_orders_with_a_low_risk_level__boolean": true,
  "required_order_tag": null,
  "only_capture_for_line_items_that_do_not_require_shipping__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% assign n = options.number_of_minutes_to_wait_before_capturing__number %}

shopify/orders/create{% if n != blank and n > 0 %}+{{ n }}.minutes{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task runs immediately after an order is created, and captures an authorized transaction if one is present. Choose which risk levels to capture for, and optionally choose to filter by order tag. You may also choose to only capture funds for line items that do not require shipping.

This task runs immediately after an order is created. If you are selectively capturing by risk level, and if you have additional apps informing an order's risk level, increase "Number of minutes to wait before capturing" to make sure those apps have time to contribute their data.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-capture-payments-when-an-order-is-created), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-payments-when-an-order-is-created.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
