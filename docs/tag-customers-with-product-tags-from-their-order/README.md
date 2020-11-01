# Auto-tag customers with product tags from their order

* [task.json](../../tasks/tag-customers-with-product-tags-from-their-order.json) (for import/export)
* [Task script](./script.liquid)

When orders come in, use this task to copy product tags from the order to the customer on file. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, optionally configure this task to only look for a certain set of tags. This task supports running manually, to scan and tag all customers based on their order history.

## Default options

```json
{
  "only_copy_these_tags__array": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

When orders come in, use this task to copy product tags from the order to the customer on file. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, optionally configure this task to only look for a certain set of tags. This task supports running manually, to scan and tag all customers based on their order history.

This task will scan the product tags for each order, as the order is created, and copy those tags over to the customer record. Run this task manually to process all orders, for all customers. (This may take some time!)

To keep things clean, fill in the "Only copy these tags" option with a comma-separated list of tags you want to watch for.
