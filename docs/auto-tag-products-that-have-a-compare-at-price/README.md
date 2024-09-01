# Auto-tag products that have a "compare at" price

Tags: Auto-Tag, Compare at, Products, Sale

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that _aren't_ on sale), and Mechanic will take care of applying and removing tags as appropriate.

* View in the task library: [tasks.mechanic.dev/auto-tag-products-that-have-a-compare-at-price](https://tasks.mechanic.dev/auto-tag-products-that-have-a-compare-at-price)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-that-have-a-compare-at-price.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_for_sale_products__required": "on-sale",
  "tag_for_all_other_products": "not-on-sale",
  "sale_products_must_have_a_price_lower_than_the_compare_at_price__boolean": true
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

This task will keep your sale tags in sync, without any manual work. Configure the task with a tag to apply (and optionally a tag for products that _aren't_ on sale), and Mechanic will take care of applying and removing tags as appropriate.

Run this task manually to update your entire product catalog at once.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-tag-products-that-have-a-compare-at-price), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-that-have-a-compare-at-price.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
