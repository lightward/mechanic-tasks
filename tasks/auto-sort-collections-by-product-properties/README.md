# Auto-sort collections by product properties

* [Task script](./script.liquid)

This task re-sorts your chosen collections by any product property that you choose. A property lookup can be something simple, like "published_at", or more complicated: use multiple property lookups, like "metafields", "store", and "priority", to sort collections by product metafield values.

## Default options

```json
{
  "product_property_lookups__array_required": [
    "published_at"
  ],
  "reverse_sort__boolean": false,
  "collection_titles_or_ids__array_required": [

  ],
  "run_hourly__boolean": false,
  "run_daily__boolean": false
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
```

## Documentation

This task re-sorts your chosen collections by any product property that you choose. Use the "Product property lookups" option to control what attribute the task "looks up". For example, using "published_at" will result in sorting by the date and time the product was published. Add more than one lookup to dive more deeply into product data: using the lookups "metafields", "store", and "priority" will result in a collection sorted by the `store.priority` metafield on each product.

Refer to [Shopify's API documentation](https://help.shopify.com/en/api/reference/products/product) to find the product property you're looking for

Run this task manually to re-sort your collections on demand. Optionally, configure this task to run hourly or nightly as well.

Configure this task for certain collections using each collection's title, or its ID. [Learn how to find the collection IDs.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

The collections used with this task must be configured for manual sorting. [Learn how to change the sort order of your collections.](https://help.shopify.com/en/manual/products/collections/collection-layout#change-the-sort-order-for-the-products-in-a-collection)