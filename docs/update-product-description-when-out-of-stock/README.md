# Update product description when out of stock

Tags: (not tagged!)

This task prepends an HTML message to the beginning of the product description, for each product that goes out of stock, and then restores the original product description when the product is back in stock. Optionally, you may choose to append the HTML message to the end of the product description, instead of prepending it to the beginning.

* View in the task library: [usemechanic.com/task/update-product-description-when-out-of-stock](https://usemechanic.com/task/update-product-description-when-out-of-stock)
* Task JSON, for direct import: [task.json](../../tasks/update-product-description-when-out-of-stock.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_modify_products_with_this_tag": "",
  "add_this_html_to_product_description__multiline_required": null,
  "add_the_html_to_end_of_product_description_instead_of_beginning__boolean": false
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/inventory_levels/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task prepends an HTML message to the beginning of the product description, for each product that goes out of stock, and then restores the original product description when the product is back in stock. Optionally, you may choose to append the HTML message to the end of the product description, instead of prepending it to the beginning.

The task runs when inventory levels change, or may be run manually on demand. Manual runs will ignore products that do not have inventory tracking enabled.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/update-product-description-when-out-of-stock), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/update-product-description-when-out-of-stock.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
