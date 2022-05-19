# Unpublish products when tagged

Tags: Products, Tag, Unpublish

This task watches for certain product tags, and removes the product from the selected sales channel(s) when those tags are found.

* View in the task library: [tasks.mechanic.dev/unpublish-products-when-tagged](https://tasks.mechanic.dev/unpublish-products-when-tagged)
* Task JSON, for direct import: [task.json](../../tasks/unpublish-products-when-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_tags_to_watch_for__required_array": null,
  "require_product_to_have_all_given_tags_before_unpublishing__boolean": null,
  "sales_channel_names__required_array": [
    "Online Store"
  ]
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for certain product tags, and removes the product from the selected sales channel(s) when those tags are found.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/unpublish-products-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-products-when-tagged.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
