# Auto-tag products with their vendors

Tags: Auto-Tag, Products, Vendor

Use this task to copy each product's vendor to the product's tag. Optionally, you can apply a prefix to all vendor tags (e.g. "vendor-"). Run this task manually to scan every product in your store. Otherwise, this task will run for specific products, whenever a product is created or updated.

* View in the task library: [usemechanic.com/task/auto-tag-products-with-their-vendors](https://usemechanic.com/task/auto-tag-products-with-their-vendors)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-products-with-their-vendors.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "apply_this_prefix_to_vendor_tags": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to copy each product's vendor to the product's tag. Optionally, you can apply a prefix to all vendor tags (e.g. "vendor-"). Run this task manually to scan every product in your store. Otherwise, this task will run for specific products, whenever a product is created or updated.

__Note__: When using the vendor tag prefix option, any tags on a product that contain that prefix, but do not match the current vendor, will be removed. This does _not_ happen when the prefix option is not used or has been changed.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-products-with-their-vendors), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-products-with-their-vendors.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
