# Auto-tag orders based on customer account tags

Tags: Auto-Tag, Customers, Orders

Use this task to apply certain tags to newly-created orders, based on what tags are on the associated customer. Configure this task with one-to-one mappings of customer tags to look for, connected to order tags to add.

* View in the task library: [usemechanic.com/task/auto-tag-orders-based-on-customer-account-tags](https://usemechanic.com/task/auto-tag-orders-based-on-customer-account-tags)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-orders-based-on-customer-account-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tags_to_look_for_and_order_tags_to_add__keyval": {
    "wholesale-customer": "wholesale-order"
  }
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to apply certain tags to newly-created orders, based on what tags are on the associated customer. Configure this task with one-to-one mappings of customer tags to look for, connected to order tags to add.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-orders-based-on-customer-account-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-based-on-customer-account-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
