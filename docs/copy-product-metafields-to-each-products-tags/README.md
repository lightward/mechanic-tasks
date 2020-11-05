# Copy product metafields to each product's tags

This task exists to fill the gap between Shopify's admin product search, and product metafields. Use this task to copy metafield values to product tags, allowing you to filter products by tags based on those metafields.

* View in the task library: [usemechanic.com/task/copy-product-metafields-to-each-products-tags](https://usemechanic.com/task/copy-product-metafields-to-each-products-tags)
* Task JSON, for direct import: [task.json](../../tasks/copy-product-metafields-to-each-products-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace__required": null,
  "metafield_key__required": null,
  "monitor_new_products__boolean": null,
  "test_mode__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.monitor_new_products__boolean %}
  shopify/products/create
{%endif%}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task exists to fill the gap between Shopify's admin product search, and product metafields. Use this task to copy metafield values to product tags, allowing you to filter products by tags based on those metafields.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/copy-product-metafields-to-each-products-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/copy-product-metafields-to-each-products-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
