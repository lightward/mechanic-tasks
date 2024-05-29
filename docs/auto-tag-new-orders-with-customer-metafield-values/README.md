# Auto-tag new orders with customer metafield values

Tags: Auto-Tag, Customers, Metafields, Orders

When new orders are created, this task will check to see if any of the configured metafields are set on the customer who placed the order, and if so then it will add order tags based on the metafield values.

* View in the task library: [tasks.mechanic.dev/auto-tag-new-orders-with-customer-metafield-values](https://tasks.mechanic.dev/auto-tag-new-orders-with-customer-metafield-values)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-new-orders-with-customer-metafield-values.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafields_and_tag_prefixes__keyval_required": null,
  "truncate_long_tags__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/order
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When new orders are created, this task will check to see if any of the configured metafields are set on the customer who placed the order, and if so then it will add order tags based on the metafield values.

Configure this task by adding customer metafields on the left, in the form of *namespace.key*, and the optional paired tag prefixes on the right. Prefixes should include a divider and/or spacing as needed (e.g. "Batch: ", "attn_").

This task supports the following metafield types - "boolean", "date", "date_time", "number_decimal", "number_integer", and "single_line_text_field". List versions of each type are also supported (e.g. "list.single_line_text_field"). List metafields with multiple values set on the customer will result in an order tag being added for each value.

**IMPORTANT:** Shopify limits order tags to 40 characters. If a tag (including the optional prefix) exceeds that length, then that tag will not be set on the order. Enable the "Truncate long tags" option to have the task truncate tags to a maximum of 40 characters. Truncations are made from the right side of the tag.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-new-orders-with-customer-metafield-values), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-new-orders-with-customer-metafield-values.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
