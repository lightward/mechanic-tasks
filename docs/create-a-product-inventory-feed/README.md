# Create a product inventory feed

* [task.json](../../tasks/create-a-product-inventory-feed.json) (for import/export)
* [Task script](./script.liquid)

This task, paired with the linked instructions, creates a feed of product inventory (optionally filtering by product type).

## Default options

```json
{
  "filter_by_product_type": "Shirt"
}
```

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/scheduler/daily
mechanic/scheduler/daily+12.hours
```

## Documentation

This task, paired with the linked instructions, creates a feed of product inventory (optionally filtering by product type).

This task creates a regularly-updated feed, available at yourstore.com/pages/feed. Follow these required instructions to configure your store:

[Tutorial: Creating scheduled feeds with Mechanic](https://help.usemechanic.com/tutorials/creating-scheduled-feeds)

Note: This task fetches up to 30 variants per product.
