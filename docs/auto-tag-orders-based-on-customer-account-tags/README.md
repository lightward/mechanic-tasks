# Auto-tag orders based on customer account tags

Tags: Auto-Tag, Customers, Orders

Use this task to apply certain tags to newly-created orders, based on what tags are on the associated customer. Configure this task with one-to-one mappings of customer tags to look for, connected to order tags to add.

* View in the task library: [tasks.mechanic.dev/auto-tag-orders-based-on-customer-account-tags](https://tasks.mechanic.dev/auto-tag-orders-based-on-customer-account-tags)
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

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to apply certain tags to newly-created orders, based on what tags are on the associated customer. Configure this task with one-to-one mappings of customer tags to look for, connected to order tags to add.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-orders-based-on-customer-account-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-orders-based-on-customer-account-tags.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
