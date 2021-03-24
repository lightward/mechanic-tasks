# Auto-tag orders with their tracking numbers

Tags: Auto-Tag, Orders, Tracking, Shipping

Tracking numbers aren't generally searchable within Shopify. Use this task to fix that, by copying all fulfillment tracking numbers over to the order itself, as (searchable!) order tags.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-their-tracking-numbers](https://usemechanic.com/task/auto-tag-orders-with-their-tracking-numbers)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-their-tracking-numbers.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Tracking numbers aren't generally searchable within Shopify. Use this task to fix that, by copying all fulfillment tracking numbers over to the order itself, as (searchable!) order tags.

This task runs when fulfillments are created or updated, adding the fulfillment's tracking number(s) to the order's tags. Run this task manually to scan and tag all of your store's existing orders.

Please note: any special characters in the tracking number may be ignored by Shopify.

[YouTube: Watch the development video!](https://youtu.be/qNsdDaPYl24)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-their-tracking-numbers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-their-tracking-numbers.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
