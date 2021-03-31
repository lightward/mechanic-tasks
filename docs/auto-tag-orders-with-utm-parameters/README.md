# Auto-tag orders with UTM parameters

Tags: Auto-Tag, Marketing, Orders

This task automatically tags incoming orders with the UTM campaign, content, medium, source, and/or term associated with the customer's visit. Run this task manually to tag your existing orders.

* View in the task library: [usemechanic.com/task/auto-tag-orders-with-utm-parameters](https://usemechanic.com/task/auto-tag-orders-with-utm-parameters)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task automatically tags incoming orders with the UTM campaign, content, medium, source, and/or term associated with the customer's visit. Run this task manually to tag your existing orders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-with-utm-parameters), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-with-utm-parameters.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
