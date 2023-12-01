# Auto-fulfill items that don't require shipping

Tags: Fulfillment, Orders

Useful for digital products, memberships, or anything else that needs to be fulfilled instantly. This task watches for paid orders, and auto-fulfills all line items that don't require shipping.

* View in the task library: [tasks.mechanic.dev/auto-fulfill-items-that-dont-require-shipping](https://tasks.mechanic.dev/auto-fulfill-items-that-dont-require-shipping)
* Task JSON, for direct import: [task.json](../../tasks/auto-fulfill-items-that-dont-require-shipping.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "include_products_with_any_of_these_tags__array": null,
  "exclude_products_with_any_of_these_tags__array": null,
  "wait_until_any_other_shippable_items_are_fulfilled__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
{% if options.wait_until_any_other_shippable_items_are_fulfilled__boolean %}
  shopify/orders/partially_fulfilled
  shopify/orders/fulfilled
{% endif %}
mechanic/user/order
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Useful for digital products, memberships, or anything else that needs to be fulfilled instantly. This task watches for paid orders, and auto-fulfills all line items that don't require shipping.

Optionally, choose to include or exclude products by tag, and wait until other shippable items are fulfilled, if any.

Note: exclusion tags on a product will take priority over inclusion tags.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-fulfill-items-that-dont-require-shipping), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-fulfill-items-that-dont-require-shipping.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
