# Auto-untag customers when a certain product is refunded

* [Task script](./script.liquid)

Use this task to automatically remove a certain customer tag whenever a particular product is refunded, for that customer.

## Default options

```json
{
  "product_ids__number_array_required": null,
  "customer_tag_to_remove__required": null
}
```

## Subscriptions

```liquid
shopify/refunds/create
```

## Documentation

This task is configured with one or more product IDs ([learn how to find a product ID](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)), and with the customer tag to remove when one of those products is refunded.