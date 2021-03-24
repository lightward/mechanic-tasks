# Unpublish products when tagged

Tags: Unpublish, Products, Tag

This task watches for certain product tags, and removes the product from the selected sales channel(s) when those tags are found.

* View in the task library: [usemechanic.com/task/unpublish-products-when-tagged](https://usemechanic.com/task/unpublish-products-when-tagged)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for certain product tags, and removes the product from the selected sales channel(s) when those tags are found.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/unpublish-products-when-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/unpublish-products-when-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
