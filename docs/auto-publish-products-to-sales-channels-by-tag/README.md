# Auto publish products to sales channels by tag

Tags: Products, Publish, Sales Channel, Unpublish

This task runs when products are updated (which includes product creation) and manages publishing to the configured sales channels, according to whether or not the product has a certain tag. Products with the tag will be published on ALL of the configured sales channels; and those without the product tag will be unpublished from them.

* View in the task library: [usemechanic.com/task/auto-publish-products-to-sales-channels-by-tag](https://usemechanic.com/task/auto-publish-products-to-sales-channels-by-tag)
* Task JSON, for direct import: [task.json](../../tasks/auto-publish-products-to-sales-channels-by-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "sales_channel_names__array_required": null,
  "product_tag__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/products/update
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task runs when products are updated (which includes product creation) and manages publishing to the configured sales channels, according to whether or not the product has a certain tag. Products with the tag will be published on ALL of the configured sales channels; and those without the product tag will be unpublished from them.

Run this task manually to scan your entire product catalog, publishing and unpublishing products by the presence or absence of the configured product tag.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-publish-products-to-sales-channels-by-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-publish-products-to-sales-channels-by-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
