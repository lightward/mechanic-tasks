# Tag products by their price ranges

Tags: Auto-Tag, Price, Products

Some themes (like Mogo!) support browsing products by price range. Under the hood, this functionality is powered by tags that look like "rprice-1-100". This task watches for new and updated products, making sure that the product range tags stay in sync with prices available for each product. And, if you run the task manually, it'll update the tags for all products in your shop.

* View in the task library: [tasks.mechanic.dev/tag-products-by-their-price-ranges](https://tasks.mechanic.dev/tag-products-by-their-price-ranges)
* Task JSON, for direct import: [task.json](../../tasks/tag-products-by-their-price-ranges.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "tag_prefix__required": "rprice-",
  "range_maximum__required_number": "200",
  "range_minimum__required_number": "0",
  "range_increment__required_number": "25",
  "use_only_the_single_smallest_range_that_applies_to_each_variant__boolean": null,
  "use_every_range_that_applies_to_each_variant__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/products/create
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Some themes (like Mogo!) support browsing products by price range. Under the hood, this functionality is powered by tags that look like "rprice-1-100". This task watches for new and updated products, making sure that the product range tags stay in sync with prices available for each product. And, if you run the task manually, it'll update the tags for all products in your shop.

This task adds tags that specify the price ranges that describe the product. Then, choose between tagging with _every_ applicable price range (e.g. a product with price $50 might be tagged for the ranges 0-50, 0-75, 0-100, 25-50, 25-75, 25-100, 50-75, and 50-100), or between tagging with only the smallest applicable price ranges (e.g. only 50-75).

Out of the box, this task will run on product create and update. You can also use the "Run Task" button to request a run across all products in your shop.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-products-by-their-price-ranges), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-products-by-their-price-ranges.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
