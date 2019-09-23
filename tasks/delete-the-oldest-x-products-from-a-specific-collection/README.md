# Delete the oldest x products from a specific collection

* [Task script](./script.liquid)

Either triggered manually, or configured to run daily, this task will look for the oldest products in the collection of your choice, and delete as many of them as you wish.

## Default options

```json
{
  "collection_id__number_required": null,
  "number_of_products_to_delete_at_once__number_required": null,
  "test_mode__boolean": null,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

This task requires a collection ID - [learn how to find yours](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).