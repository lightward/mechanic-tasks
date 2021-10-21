# Auto-tag new online orders by web browser

Tags: Auto-Tag, Order Attributes, Web Browser

This task monitors incoming orders, and tags them with information about the customer's web browser.

* View in the task library: [usemechanic.com/task/auto-tag-new-online-orders-by-web-browser](https://usemechanic.com/task/auto-tag-new-online-orders-by-web-browser)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-online-orders-by-web-browser.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_browser_version__boolean": false
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

This task monitors incoming orders, and tags them with information about the customer's web browser.

This task will monitor incoming orders, and tag them if the browser name can be derived from the order information.

Run this task manually to scan your existing orders, and tag them as appropriate.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-new-online-orders-by-web-browser), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-online-orders-by-web-browser.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
