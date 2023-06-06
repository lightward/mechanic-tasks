# Auto-remove attributes on new orders after X minutes

Tags: Order Attributes, Orders

This task will remove order attributes from newly created or paid orders after a configurable amount of minutes. This can be helpful when order attributes are set by apps or other processes that are not necessary to keep on the order after initial processing.

* View in the task library: [tasks.mechanic.dev/auto-remove-attributes-on-new-orders-after-x-minutes](https://tasks.mechanic.dev/auto-remove-attributes-on-new-orders-after-x-minutes)
* Task JSON, for direct import: [task.json](../../tasks/auto-remove-attributes-on-new-orders-after-x-minutes.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minutes_to_wait_before_removing_order_attributes__number_required": "15",
  "order_attributes_to_remove__array": null,
  "remove_all_order_attributes__boolean": false,
  "only_run_for_paid_orders__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% assign delay = options.minutes_to_wait_before_removing_order_attributes__number_required | default: 0 %}
{% if options.only_run_for_paid_orders__boolean %}
  shopify/orders/paid+{{ delay }}.minutes
{% else %}  
  shopify/orders/create+{{ delay }}.minutes
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will remove order attributes from newly created or paid orders after a configurable amount of minutes. This can be helpful when order attributes are set by apps or other processes that are not necessary to keep on the order after initial processing.

Either configure one or more exact order attributes to be removed (e.g. "__app_track_id"), or choose the _Remove all order attributes_ option.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-remove-attributes-on-new-orders-after-x-minutes), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-remove-attributes-on-new-orders-after-x-minutes.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
