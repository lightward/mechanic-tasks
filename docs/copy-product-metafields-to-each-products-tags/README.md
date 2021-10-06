# Copy product metafields to each product's tags

Tags: Metafields, Products, Tag

This task exists to fill the gap between Shopify's admin product search, and product metafields. Use this task to copy metafield values to product tags, allowing you to filter products by tags based on those metafields.

* View in the task library: [usemechanic.com/task/copy-product-metafields-to-each-products-tags](https://usemechanic.com/task/copy-product-metafields-to-each-products-tags)
* Task JSON, for direct import: [task.json](../../tasks/copy-product-metafields-to-each-products-tags.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace__required": null,
  "metafield_keys_and_tag_prefixes__keyval_required": null,
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

Begin by entering in the namespace for the metafield(s) you will be configuring for this task. Then, for each metafield, click __Add item__, add the *exact* metafield key on the left, and *optionally* a prefix to apply to tags generated for that specific metafield key. The tag prefix should include any desired demarcation (e.g. spaces, dashes, colons) from the metafield value.

When run manually, this task scans your entire product catalog. Optionally, you can enable the __Monitor new products__ option to have it also process new products as they are created.

It is *highly* recommended that you first run this task in __Test mode__ and review the task log to see what tags will be set based on your configuration settings, the metafield data, and the task logic for handling each type.

This task supports *some* of the [Shopify metafield types](https://shopify.dev/apps/metafields/definitions/types), specifically the following types: `boolean`, `color`, `date`, `date_time`, `dimension`, `number_decimal`, `number_integer`, `rating`, `single_line_text_field`, `volume`, and `weight`.

__Important Notes:__
- This task does __not__ remove any tags, even when tag prefixes are used.
- This task only supports a single metafield namespace. If you want to use additional namespaces, then multiple instances of this task can be implemented, each configured with a distinct namespace.
- This task is mildly opinionated about the formatting of tags based on the metafield type (e.g. `dimension` metafields will concatenate the value and dimensional unit together with a space.). Each type is broken out within the task code, allowing for easy customization by type.
- Legacy support for the deprecated `integer` and `string` types is included. They will be treated as `number_integer` and `single_line_text_field` types respectively.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/copy-product-metafields-to-each-products-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/copy-product-metafields-to-each-products-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
