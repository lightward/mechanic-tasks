# Auto-create collections by product type or vendor

Tags: (not tagged!)

When products are created, this task will auto-create smart collections by product type and/or vendor, if such collections don't already exist. Additionally, configuring one or more __exact__ sales channel names will enable publishing of any _newly created_ collections by this task to those sales channels.

* View in the task library: [usemechanic.com/task/auto-create-collections-by-product-type-or-vendor](https://usemechanic.com/task/auto-create-collections-by-product-type-or-vendor)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/update
mechanic/user/trigger
{% if options.names_of_sales_channels_to_publish_collections_to__array != blank %}
  mechanic/actions/perform
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

When products are created, this task will auto-create smart collections by product type and/or vendor, if such collections don't already exist. Additionally, configuring one or more __exact__ sales channel names will enable publishing of any _newly created_ collections by this task to those sales channels.

_For example:_  
A new product is added with a vendor of "ACME". If a collection with that exact title does not already exist, then the task will create it with a title of "ACME" and add a rule of "vendor = ACME", which will allow Shopify to auto-populate the collection.

The task may also be run manually to gather _all_ of the product types and vendors in your shop, and then making the same decisions on whether to create new collections and publish them.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-create-collections-by-product-type-or-vendor), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-create-collections-by-product-type-or-vendor.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
