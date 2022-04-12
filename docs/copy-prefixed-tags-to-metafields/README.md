# Copy prefixed tags to metafields

Tags: Customers, Metafields, Online Store 2.0, Orders, Products, Tag

Use this task to copy prefixed tags to metafields, useful for Online Store 2.0 filtering. When run manually, it will scan for all of the object type you have configured in the task, and add/update the configured metafield on each with the resulting *tag value* when the tag prefix is matched.

* View in the task library: [usemechanic.com/task/copy-prefixed-tags-to-metafields](https://usemechanic.com/task/copy-prefixed-tags-to-metafields)
* Task JSON, for direct import: [task.json](../../tasks/copy-prefixed-tags-to-metafields.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "shopify_object_type__required": null,
  "metafield_namespace__required": null,
  "metafield_key__required": null,
  "metafield_type__required": null,
  "tag_prefix__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to copy prefixed tags to metafields, useful for Online Store 2.0 filtering. When run manually, it will scan for all of the object type you have configured in the task, and add/update the configured metafield on each with the resulting *tag value* when the tag prefix is matched.

This task supports the `customer`, `order`, and `product` Shopify object types, and the following [Shopify metafield types](https://shopify.dev/apps/metafields/definitions/types): `boolean`, `date`, `date_time`, `number_decimal`, `number_integer`, and `single_line_text_field`. The tag prefix should include any existing demarcation (e.g. spaces, dashes, colons) from the tag value.

__By example:__
- *Object type:* "product"
- *Metafield type:* "date"
- *Tag prefix:* "Release Date: "
- *Product tag:* "Release Date: 2022-04-01"
- *Tag value:* "2022-04-01"

__Important Notes:__
- This task does not sync tags to metafields on an ongoing basis, nor does it delete existing metafields when there are no qualifying tags for a product.
- If there are multiple qualifying tags on an object, then there is no guarantee on which one the task might utilize, but it will only be one of them in any case.
- When using *date* and *date_time* metafield types, the tag value __must__ be in ISO-8601 format (*YYYY-MM-DD* and *YYYY-MM-DDTHH:MM::SS* respectively).
- For the *boolean* metafield type, the tag values can be any of the following: *true*, *false*, *yes*, *no*, *1*, or *0*. The resulting metafield value will be either "true" or "false".

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/copy-prefixed-tags-to-metafields), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/copy-prefixed-tags-to-metafields.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
