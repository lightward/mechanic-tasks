# Auto-tag products marked "Continue selling when out of stock"

Tags: Auto-Tag, Collections, Inventory, Products

This task will automatically tag any products which have variants set to "continue selling when out of stock." This allows you to set up a product collection that includes "available" products and not just products with inventory greater than zero. Configure the task with a tag to apply, and Mechanic will take care of applying and removing the tag as appropriate.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-marked-continue-selling-when-out-of-stock](https://tasks.mechanic.dev/auto-tag-products-marked-continue-selling-when-out-of-stock)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-marked-continue-selling-when-out-of-stock.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_continue_selling_products__required": "continue-selling"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task will automatically tag any products which have variants set to "continue selling when out of stock." This allows you to set up a product collection that includes "available" products and not just products with inventory greater than zero. Configure the task with a tag to apply, and Mechanic will take care of applying and removing the tag as appropriate.

Run this task manually to update your entire product catalog at once.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-marked-continue-selling-when-out-of-stock), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-marked-continue-selling-when-out-of-stock.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
