# Maintain a collection of new products

* [Task script](./script.liquid)

Use this task to maintain a "New Products" collection, specifying either a number of products to include or the number of days to keep each product around. Easy! :)

## Default options

```json
{
  "number_of_days_to_keep_a_product_in_this_collection__number": null,
  "number_of_products_to_keep_in_this_collection__number": null,
  "collection_id__number_required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
```

## Documentation

To use this task, create a manual collection, and add the collection ID to the task options. (Find the ID by opening the collection in the Shopify admin, then looking at the URL in your browser's address bar. If the URL is https://example.myshopify.com/admin/collections/12345, the collection ID is 12345.)

Use the "Run task" button to populate your collection for the first time. After that, this task will run daily, at midnight in your local timezone. During each run, the task will update the collection, adding new products and removing old ones as appropriate.