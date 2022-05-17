# Auto-tag customers when their order is tagged

Tags: Auto-Tag, Customers, Orders, Tag, Watch

This task watches for order tags, and adds a corresponding tag to the customer whenever a known order tag is found.

* View in the task library: [tasks.mechanic.dev/auto-tag-customers-when-their-order-is-tagged](https://tasks.mechanic.dev/auto-tag-customers-when-their-order-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-when-their-order-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tags_and_customer_tags__keyval_required": {
    "order-tag-to-watch-for": "corresponding-customer-tag-to-apply"
  }
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for order tags, and adds a corresponding tag to the customer whenever a known order tag is found.

Configure this task with order tags on the left, and customer tags on the right. When an order is created or updated with one or more of the tags on the left, the corresponding customer tags will be applied to the customer. Simple as that. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-customers-when-their-order-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-when-their-order-is-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
