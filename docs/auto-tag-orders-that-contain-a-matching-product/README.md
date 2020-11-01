# Auto-tag orders that contain a matching product

* [task.json](../../tasks/auto-tag-orders-that-contain-a-matching-product.json) (for import/export)
* [Task script](./script.liquid)

This task watches for incoming orders, and tags them if they contain a product that matches by title or by product tags. Run this task manually to scan your store's order history, tagging older orders that qualify.

## Default options

```json
{
  "required_product_title": null,
  "required_product_tags__array": null,
  "order_tags_to_apply__required_array": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

## Documentation

This task watches for incoming orders, and tags them if they contain a product that matches by title or by product tags. Run this task manually to scan your store's order history, tagging older orders that qualify.

Note: If more than one required product tag is specified, this task will look for products that _individually_ contain _all_ of the tags provided.
