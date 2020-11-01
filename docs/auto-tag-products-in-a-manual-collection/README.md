# Auto-tag products in a manual collection

* [task.json](../../tasks/auto-tag-products-in-a-manual-collection.json) (for import/export)
* [Task script](./script.liquid)

If you prefer to categorize your products using manual collections, but you still need your tags to match up, use this task to monitor your manual collection and automatically tag the products it contains.

## Default options

```json
{
  "collection_tag__required": "sale",
  "collection_id__number_required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
shopify/collections/update
```

## Documentation

If you prefer to categorize your products using manual collections, but you still need your tags to match up, use this task to monitor your manual collection and automatically tag the products it contains.

Run this task manually to auto-tag products in your configured collection, and to untag any products that are not in this collection. Otherwise, this task will run automatically whenever the configured collection is updated, which includes the addition or removal of products.

This task only supports manual collections, not automated collections. ([Learn about the differences here.](https://help.shopify.com/en/manual/products/collections#collection-types)) Configure this task with your collection ID. [Learn how to find this.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)
