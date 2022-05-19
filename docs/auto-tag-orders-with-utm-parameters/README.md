# Auto-tag orders with UTM parameters

Tags: Auto-Tag, Marketing, Orders

This task automatically tags incoming orders with the UTM campaign, content, medium, source, and/or term associated with the customer's visit. Run this task manually to tag your existing orders.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-with-utm-parameters](https://tasks.mechanic.dev/auto-tag-orders-with-utm-parameters)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-with-utm-parameters.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_with_utm_campaign__boolean": null,
  "tag_with_utm_content__boolean": null,
  "tag_with_utm_medium__boolean": null,
  "tag_with_utm_source__boolean": null,
  "tag_with_utm_term__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task automatically tags incoming orders with the UTM campaign, content, medium, source, and/or term associated with the customer's visit. Run this task manually to tag your existing orders.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-with-utm-parameters), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-utm-parameters.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
