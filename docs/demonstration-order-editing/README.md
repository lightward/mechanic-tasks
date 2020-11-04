# Demonstration: Order editing

* [task.json](../../tasks/demonstration-order-editing.json) (for import/export)
* [Task script](./script.liquid)

This task demonstrates order editing, by automatically adding a product to orders that (optionally) meet an order minimum. Configure this task using a variant ID. (To learn how to find this, see [How do I find an ID for a product, collection, order, or something else?](https://docs.usemechanic.com/article/360-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).)

## Default options

```json
{
  "minimum_order_total__number": null,
  "variant_id_to_add__number_required": null,
  "quantity_to_add__number_required": null,
  "notify_customer__boolean": null,
  "staff_note__required": null
}
```

## Subscriptions

```liquid
shopify/orders/create
mechanic/actions/perform
```

## Documentation

This task demonstrates order editing, by automatically adding a product to orders that (optionally) meet an order minimum. Configure this task using a variant ID. (To learn how to find this, see [How do I find an ID for a product, collection, order, or something else?](https://docs.usemechanic.com/article/360-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).)

Note: This task requires a minimum Shopify API version of 2020-01. To learn how to set this, see [Choosing a Shopify API version](https://docs.usemechanic.com/article/352-choosing-a-shopify-api-version).
