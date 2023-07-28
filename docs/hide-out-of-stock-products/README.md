# Hide out-of-stock products

Tags: Inventory, Location, Out of Stock, Products, Unpublish

This task monitors inventory updates, and pulls the product from the configured sales channels whenever a product's total inventory meets your "out of stock" threshold. Optionally, it'll send you an email when it does so. You may also choose whether to further refine the products being considered by this task by configuring inclusion or exclusion tags (note: exclusion tags will always take precedence over inclusion tags).

* View in the task library: [tasks.mechanic.dev/hide-out-of-stock-products](https://tasks.mechanic.dev/hide-out-of-stock-products)
* Task JSON, for direct import: [task.json](../../tasks/hide-out-of-stock-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "out_of_stock_inventory_quantity__number_required": "0",
  "sales_channel_names__required_array": [
    "Online Store"
  ],
  "only_include_products_with_any_of_these_tags__array": null,
  "always_exclude_products_with_any_of_these_tags__array": null,
  "only_include_inventory_from_these_location_names__array": null,
  "email_notification_recipient__email": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/inventory_levels/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors inventory updates, and pulls the product from the configured sales channels whenever a product's total inventory meets your "out of stock" threshold. Optionally, it'll send you an email when it does so. You may also choose whether to further refine the products being considered by this task by configuring inclusion or exclusion tags (note: exclusion tags will always take precedence over inclusion tags).

If you'd like for the task to only count inventory from specific locations, then add the _exact_ location names into the task configuration. This feature can be combined with the tag options for unique unpublishing scenarios.

This task can also be run manually, to scan all products in the shop.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/hide-out-of-stock-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/hide-out-of-stock-products.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
