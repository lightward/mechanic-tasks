# Make products unavailable, after the date/time stored in product metafields

Tags: Metafields, Products, Unpublish

Use this task to automatically set product inventory to 0, and the product's inventory policy to deny out-of-stock purchases, after a date/time that you specify in a product metafield.

* View in the task library: [usemechanic.com/task/make-products-unavailable-after-the-date-time-stored-in-product-metafields](https://usemechanic.com/task/make-products-unavailable-after-the-date-time-stored-in-product-metafields)
* Task JSON, for direct import: [task.json](../../tasks/make-products-unavailable-after-the-date-time-stored-in-product-metafields.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "datetime_product_metafield_namespace__required": null,
  "datetime_product_metafield_key__required": null,
  "run_hourly__boolean": null,
  "run_daily__boolean": null,
  "test_mode__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean  %}
  mechanic/scheduler/daily
{% endif %}

mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically set product inventory to 0, and the product's inventory policy to deny out-of-stock purchases, after a date/time that you specify in a product metafield.

Configure "Datetime product metafield namespace" and "Datetime product metafield key" with the namespace and key for the product metafield that holds a Shopify [date or date_time](https://shopify.dev/apps/metafields/definitions/types) value. More information on setting up new Shopify metafields can be found [here](https://help.shopify.com/en/manual/metafields).

When you run this task (or as it runs hourly/daily, per your configuration), the task will look for products who have a date/time value that's in the past. For qualifying products, all inventory items with a level greater than 0 will have their levels set to exactly 0, and all variants will have their inventory policies set to "deny" (preventing sales, once the variants are all out of stock).

__Note:__ If you choose to use the date only type for the metafield, then the task will receive those dates as midnight local shop time. So, if this task encounters a metafield date that is the same as the task run date, then that metafield date will be in the past based on a seconds-since-midnight calculation.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/make-products-unavailable-after-the-date-time-stored-in-product-metafields), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/make-products-unavailable-after-the-date-time-stored-in-product-metafields.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
