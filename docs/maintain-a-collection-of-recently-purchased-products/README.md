# Maintain a collection of recently purchased products

* [task.json](../../tasks/maintain-a-collection-of-recently-purchased-products.json) (for import/export)
* [Task script](./script.liquid)

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the purchased products to the top of the collection of your choice. Optionally, ignore products that are sold out. Useful for "trending products" functionality. :)

## Default options

```json
{
  "collection_maximum_size__number_required": null,
  "collection_id__number_required": null,
  "ignore_products_that_are_sold_out__boolean": null,
  "wait_until_order_is_fulfilled__boolean": null
}
```

## Subscriptions

```liquid
{% if options.wait_until_order_is_fulfilled__boolean %}
  shopify/orders/fulfilled
{% else %}
  shopify/orders/paid
{% endif %}
```

## Documentation

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the purchased products to the top of the collection of your choice. Optionally, ignore products that are sold out. Useful for "trending products" functionality. :)

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the ordered products to the top of the collection of your choice. Optionally, ignore products that are sold out.

Provide this task with ID of a manual collection, which you've configured to be manually sorted. ([Learn how to find the collection ID.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else))

[YouTube: Watch the development video!](https://youtu.be/89rxU1D5tFM)
