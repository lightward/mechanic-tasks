# Tag products by metaobject reference field values

Tags: Metaobjects, Products, Tag

Use this task to copy metaobject field values to the referencing products' tags. Configure a product metafield that is a *metaobject_reference* type (or *list.metaobject_reference*), and add the metaobject field keys which contain the values to be added as tags, along with paired tag prefixes for each. Then run the task manually, or schedule it to run daily, and it will scan all active products in the shop on each run and tag them as needed.

* View in the task library: [tasks.mechanic.dev/tag-products-ny-metaobject-reference-field-values](https://tasks.mechanic.dev/tag-products-ny-metaobject-reference-field-values)
* Task JSON, for direct import: [task.json](../../tasks/tag-products-ny-metaobject-reference-field-values.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_metafield__required": "custom.book_authors",
  "metaobject_field_keys_and_tag_prefixes__keyval_required": {
    "name": "author: "
  },
  "remove_outdated_prefixed_tags__boolean": true,
  "run_daily__boolean": null,
  "test_mode__boolean": true
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to copy metaobject field values to the referencing products' tags. Configure a product metafield that is a *metaobject_reference* type (or *list.metaobject_reference*), and add the metaobject field keys which contain the values to be added as tags, along with paired tag prefixes for each. Then run the task manually, or schedule it to run daily, and it will scan all active products in the shop on each run and tag them as needed.

First consider using "Test mode" to have the task log out which tagging decisions it would have made, before having it make live changes to your products.

*Tagging example*:

A metaobject for "Book Authors" has a **name** field defined that you wish to apply as tags to the book products in your shop. The book products have a metafield definition for **custom.book_authors** that references the metaobject's entries, allowing you to attach one or more authors to a book. Using a configured tag prefix of "author: ", this task might add product tags like: "author: Jean Deaux" and "author: Anon Y. Mous".

**Note:** Mechanic cannot access metafields controlled by other apps.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/tag-products-ny-metaobject-reference-field-values), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/tag-products-ny-metaobject-reference-field-values.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
