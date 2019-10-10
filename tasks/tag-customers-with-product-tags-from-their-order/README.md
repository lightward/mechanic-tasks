# Auto-tag customers with product tags from their order

* [Task script](./script.liquid)

When orders come in, use this task to copy product tags from the order to the customer on file. Useful for automatically segmenting your customers based on attributes of their purchases. To keep things tidy, optionally configure this task to only look for a certain set of tags.

## Default options

```json
{
  "only_copy_these_tags__array": null
}
```

## Subscriptions

```liquid
shopify/orders/create
```

## Documentation

This task will scan the product tags for each order, as the order is created, and copy those tags over to the customer record.

To keep things clean, fill in the "Only copy these tags" option with a comma-separated list of tags you want to watch for.