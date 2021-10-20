# Demonstration: Auto-tag new orders, with scheduled reconciliation

Tags: Demonstration, Orders, Tag

This task illustrates Shopify's recommendation of implementing reconciliation, in the case of missing Shopify events. This implementation handles the rare case that Shopify fails to deliver a webhook (orders/create, in this example), by scanning for unprocessed orders every 15 minutes.

* View in the task library: [usemechanic.com/task/demonstration-auto-tag-new-orders-with-reconciliation](https://usemechanic.com/task/demonstration-auto-tag-new-orders-with-reconciliation)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-auto-tag-new-orders-with-reconciliation.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "run_on_order_create__boolean": true,
  "reconcile_every_15_minutes__boolean": true,
  "reconcile_on_manual_run__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_on_order_create__boolean %}
  shopify/orders/create
{% endif %}

{% if options.reconcile_every_15_minutes__boolean %}
  mechanic/scheduler/15min
{% endif %}

{% if options.reconcile_on_manual_run__boolean %}
  mechanic/user/trigger
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task illustrates Shopify's recommendation of implementing reconciliation, in the case of missing Shopify events. This implementation handles the rare case that Shopify fails to deliver a webhook (orders/create, in this example), by scanning for unprocessed orders every 15 minutes.

To learn more about this kind of scenario, see https://learn.mechanic.dev/core/shopify/events/reconciling-missing-events.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-auto-tag-new-orders-with-reconciliation), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-auto-tag-new-orders-with-reconciliation.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
