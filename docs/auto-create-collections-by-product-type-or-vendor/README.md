# Auto-create collections by product type or vendor

Tags: Collections, Products, Publish, Vendor

When products are created, this task will auto-create smart collections by product type and/or vendor, if such collections don't already exist. Additionally, configuring one or more __exact__ sales channel names will enable publishing of any _newly created_ collections by this task to those sales channels.

* View in the task library: [tasks.mechanic.dev/auto-create-collections-by-product-type-or-vendor](https://tasks.mechanic.dev/auto-create-collections-by-product-type-or-vendor)
* Task JSON, for direct import: [task.json](../../tasks/auto-create-collections-by-product-type-or-vendor.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "create_collections_by_product_type__boolean": null,
  "create_collections_by_vendor__boolean": null,
  "names_of_sales_channels_to_publish_collections_to__array": []
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
mechanic/user/trigger
{% if options.names_of_sales_channels_to_publish_collections_to__array != blank %}
  mechanic/actions/perform
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

When products are created, this task will auto-create smart collections by product type and/or vendor, if such collections don't already exist. Additionally, configuring one or more __exact__ sales channel names will enable publishing of any _newly created_ collections by this task to those sales channels.

_For example:_  
A new product is added with a vendor of "ACME". If a collection with that exact title does not already exist, then the task will create it with a title of "ACME" and add a rule of "vendor = ACME", which will allow Shopify to auto-populate the collection.

The task may also be run manually to gather _all_ of the product types and vendors in your shop, and then making the same decisions on whether to create new collections and publish them.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-create-collections-by-product-type-or-vendor), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-create-collections-by-product-type-or-vendor.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
