# Auto-add products to a custom collection when tagged

* [task.json](../../tasks/auto-add-products-to-a-custom-collection-when-tagged.json) (for import/export)
* [Task script](./script.liquid)

Just as it says. Useful for collections that can't be configured for automatic products, but still should have some products pulled in automatically.

## Default options

```json
{
  "product_tags_and_collection_ids__keyval_number_required": null
}
```

## Subscriptions

```liquid
shopify/products/create
shopify/products/update
```

## Documentation

Just as it says. Useful for collections that can't be configured for automatic products, but still should have some products pulled in automatically.

This task runs in response to products being tagged. Configure the "Product tags and collection IDs" option with product tags on the left (case-insensitive), and collection IDs on the right. The collection _must_ be a custom collection - one that has its products chosen manually. ([Learn how to find the collection ID](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).)
