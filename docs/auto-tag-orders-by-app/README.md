# Auto-tag orders by app

Some apps are responsible for placing orders. Use this task to tag orders, both incoming and historical, based on which app was responsible for placing them.

* View in the task library: [usemechanic.com/task/auto-tag-orders-by-app](https://usemechanic.com/task/auto-tag-orders-by-app)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-by-app.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "app_titles_and_order_tags__keyval_required": {
    "SomeApp": "some_app"
  },
  "test_mode__boolean": null
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

Some apps are responsible for placing orders. Use this task to tag orders, both incoming and historical, based on which app was responsible for placing them.

This task scans your incoming orders, tagging them based on the Shopify app responsible for placing each one. Run this task manually to scan and tag your existing orders.

Configure this task with app titles on the left, and order tags to add on the right.

Use the "Test mode" option to see what the task intends to do, without actually having the task actually make any changes to your customers.

Please note: this task works by *app*, and as such does not apply to orders that are created by a *sales channel*. It's sometimes difficult to distinguish whether a third-party is using an app or a sales channel; if you're having trouble with this task, try its companion, [Auto-tag orders by sales channel](https://usemechanic.com/task/auto-tag-orders-by-sales-channel).

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-by-app), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-by-app.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
