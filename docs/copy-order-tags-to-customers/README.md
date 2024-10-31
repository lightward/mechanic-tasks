# Copy order and/or product tags to customers

Tags: Auto-Tag, Customers

Run this task to scan all of your customers and their order histories, copying order and/or product tags to the relevant customer. Optionally, configure a specific set of tags to look for, when scanning. Optionally, choose to remove those tags if a qualifying source can't be found.

* View in the task library: [tasks.mechanic.dev/copy-order-tags-to-customers](https://tasks.mechanic.dev/copy-order-tags-to-customers)
* Task JSON, for direct import: [task.json](../../tasks/copy-order-tags-to-customers.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_order_tags__boolean": true,
  "include_product_tags__boolean": null,
  "only_include_customers_matching_this_query": null,
  "only_include_orders_matching_this_query": null,
  "only_copy_these_tags__array": null,
  "remove_those_tags_if_a_qualifying_source_cannot_be_found__boolean": null,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Run this task to scan all of your customers and their order histories, copying order and/or product tags to the relevant customer. Optionally, configure a specific set of tags to look for, when scanning. Optionally, choose to remove those tags if a qualifying source can't be found.

Both the customer and order query options support Liquid. This means that you can dynamically query for orders, based on things like the current date.

For example, use these options to achieve customer tags that auto-expire a year after the newest qualifying order:

* "Only include orders matching this query": `created_at:>={{ "now - 1 year" | date: "%Y-%m-%d" }}`
* "Only copy these tags": (use whatever order or product tag(s) you want to copy)
* "Remove those tags if a qualifying source cannot be found": yes
* "Run daily": yes

**Important:** The customers query must use the **exact** casing and syntax as a query that is run from the customer segments admin screen. More information on the the syntax for these can be found [here](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference).

For example, to only include customers that have the "subscriber", use this query: `customer_tags CONTAINS 'subscriber'`

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/copy-order-tags-to-customers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/copy-order-tags-to-customers.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
