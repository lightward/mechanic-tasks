# Maintain a collection of recently purchased products

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the purchased products to the top of the collection of your choice. Optionally, ignore products that are sold out. Useful for "trending products" functionality. :)

* View in the task library: [usemechanic.com/task/maintain-a-collection-of-recently-purchased-products](https://usemechanic.com/task/maintain-a-collection-of-recently-purchased-products)
* Task JSON, for direct import: [task.json](../../tasks/maintain-a-collection-of-recently-purchased-products.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "collection_maximum_size__number_required": null,
  "collection_id__number_required": null,
  "ignore_products_that_are_sold_out__boolean": null,
  "wait_until_order_is_fulfilled__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.wait_until_order_is_fulfilled__boolean %}
  shopify/orders/fulfilled
{% else %}
  shopify/orders/paid
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the purchased products to the top of the collection of your choice. Optionally, ignore products that are sold out. Useful for "trending products" functionality. :)

This task watches for newly-paid orders (or newly-fulfilled orders, if you choose), and adds or moves the ordered products to the top of the collection of your choice. Optionally, ignore products that are sold out.

Provide this task with ID of a manual collection, which you've configured to be manually sorted. ([Learn how to find the collection ID.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else))

[YouTube: Watch the development video!](https://youtu.be/89rxU1D5tFM)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/maintain-a-collection-of-recently-purchased-products), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/maintain-a-collection-of-recently-purchased-products.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
