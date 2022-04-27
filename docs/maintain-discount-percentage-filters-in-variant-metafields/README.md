# Maintain discount percentage filters in variant metafields

Tags: Discounts, Metafields, Online Store 2.0, Price, Variants

This task checks to see if a product's variants have been discounted (by having a price set below the compare at price), and for each variant that meets one ore more configured discount percentage thresholds, it will save the matched filters in a variant metafield for use with Online Store 2.0 filtering.

* View in the task library: [usemechanic.com/task/maintain-discount-percentage-filters-in-variant-metafields](https://usemechanic.com/task/maintain-discount-percentage-filters-in-variant-metafields)
* Task JSON, for direct import: [task.json](../../tasks/maintain-discount-percentage-filters-in-variant-metafields.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace_and_key__required": "my_fields.aa",
  "discount_filters_and_percentage_thresholds__keyval_number_required": null
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

This task checks to see if a product's variants have been discounted (by having a price set below the compare at price), and for each variant that meets one ore more configured discount percentage thresholds, it will save the matched filters in a variant metafield for use with Online Store 2.0 filtering.

Variants that are not discounted or do not meet any of the configured thresholds will have their metafield deleted if it exists.

This task runs when products are updated, and may also be run manually to scan all variants in the shop.

**Important notes:**
- Before configuring and running this task, a metafield definition must be created in the Shopify admin with a "Single line text" type configured to "Accept list of values", per the documentation on [creating custom metafield definitions](https://help.shopify.com/en/manual/metafields/metafield-definitions/creating-custom-metafield-definitions).
- For the _Discount filters and percentage thresholds_ task configuration field, enter the discount filter values that will display on the storefront (e.g. 25% off or more) on the left-hand side, and the percentage thresholds as whole numbers (e.g. 25) on the right.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/maintain-discount-percentage-filters-in-variant-metafields), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-discount-percentage-filters-in-variant-metafields.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
