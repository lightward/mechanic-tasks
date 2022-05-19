# Rotate products through a featured collection

Tags: Collections, Featured, Products

This task features products on a schedule, optionally publishing/unpublishing as they're featured/unfeatured. Use this task to make available exclusive products on the hourly/daily/etc, or simply to showcase a rotating selection of your best products.

* View in the task library: [tasks.mechanic.dev/rotate-products-through-a-featured-collection](https://tasks.mechanic.dev/rotate-products-through-a-featured-collection)
* Task JSON, for direct import: [task.json](../../tasks/rotate-products-through-a-featured-collection.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_ids_to_be_featured__number_array_required": null,
  "featured_collection_id__number_required": null,
  "number_of_products_to_feature_at_once__required_number": null,
  "manage_product_publishing__boolean": null,
  "maximum_number_of_times_to_feature_a_product__number": null,
  "tag_to_add_after_a_product_has_been_featured_for_the_last_time": null,
  "run_hourly__boolean": null,
  "run_daily_at_midnight__boolean": null,
  "price_multiplier_for_featured_products__number": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
{% if options.run_daily_at_midnight__boolean %}mechanic/scheduler/daily{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task features products on a schedule, optionally publishing/unpublishing as they're featured/unfeatured. Use this task to make available exclusive products on the hourly/daily/etc, or simply to showcase a rotating selection of your best products.

Configure this task by adding a list of product IDs to feature, in the order you'd like them to be featured, and setting the "Featured collection ID" to the ID of whatever collection you'd like this task to manage.* This task will feature a configurable number of products at a time, rotating through the list from top to bottom, beginning again at the top of the list when the final products are featured.

Feel free to add new IDs to the list over time, but don't remove IDs for products that are currently published! This task figures out what products are next, by looking up the currently-published products in the configured ID list.

Enable "Manage product publishing" to have this task publish products when they're featured, and unpublish products when they're done being featured.

Enable "Run hourly" or "Run daily at midnight" to have this task run automatically. Otherwise, use the "Run task" button to run this task on demand.

Enable "Maximum number of times to feature a product" to control how many times Mechanic will feature a product over its lifetime.

Configure "Price multiplier for featured products" to control pricing adjustments to apply only when a product is featured. For example, a multiplier of `0.5` would result in a product being featured for 50% off, being restored to its normal price when it is no longer featured. (This task will update the price for each of a product's variants, even if there is only one, but it will not modify any "compare at" prices.)

*To find IDs for your products or collections, navigate to the product or collection in the Shopify admin area, and use the number at the very end of the URL in your browser's address bar.

For example, a product located at example.myshopify.com/admin/products/1234567890 would have a product ID of 1234567890.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/rotate-products-through-a-featured-collection), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/rotate-products-through-a-featured-collection.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
