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
{% if options.monitor_new_and_updated_products__boolean %}
  shopify/products/update
{%endif%}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task exists to fill the gap between Shopify's admin product search, and product metafields. Use this task to copy metafield values to product tags, allowing you to filter products by tags based on those metafields.

Begin by entering in the namespace for the metafield(s) you will be configuring for this task. Then, for each metafield, click __Add item__, add the *exact* metafield key on the left, and *optionally* a prefix to apply to tags generated for that specific metafield key. The tag prefix should include any desired demarcation (e.g. spaces, dashes, colons) from the metafield value.

To have the task remove *prefixed* tags that no longer apply, then enable the __Remove outdated prefixed tags__ option. As an example: if a product has a "Released: 2021-10-01" tag, and this task is configured with a "Released: " tag prefix, and the associated metafield value changes (or is cleared), then the task can remove the original tag. 

When run manually, this task scans your entire product catalog. Optionally, you can enable the __Monitor new and updated products__ option to have it also process products as they are created and updated.

It is *highly* recommended that you first run this task in __Test mode__ and review the task log to see what tags will be set based on your configuration settings, the metafield data, and the task logic for handling each type.

This task supports the following [Shopify metafield types](https://shopify.dev/apps/metafields/definitions/types): `boolean`, `color`, `date`, `date_time`, `dimension`, `number_decimal`, `number_integer`, `rating`, `single_line_text_field`, `volume`, and `weight`. Support for the deprecated `integer` and `string` types is included by treating them as `number_integer` and `single_line_text_field` types respectively.

__Important Notes:__
- Be sure to run a full manual scan when new metafield keys are added in this task, so that all of your products can be evaluated with the tagging logic.
- This task _cannot_ remove outdated tags without prefixes, as it will not be able to identify the outdated values (Shopify does not have any metadata or authorship attached to product tags).  
- This task only supports a single metafield namespace. If you want to use additional namespaces, then multiple instances of this task can be implemented, each configured with a distinct namespace. __Caution:__ do not use the same tag prefix in multiple instances of this task as then each instance will respond to the other's add/remove tagging actions infinitely.
- This task is mildly opinionated about the formatting of tags based on the metafield type (e.g. `dimension` metafields will concatenate the value and dimensional unit together with a space.). Each type is broken out within the task code, allowing for easy customization by type.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/copy-product-metafields-to-each-products-tags), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/copy-product-metafields-to-each-products-tags.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
