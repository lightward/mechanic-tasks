# Raise the price of a product after every sale

* [task.json](../../tasks/raise-the-price-of-a-product-after-every-sale.json) (for import/export)
* [Task script](./script.liquid)

This task monitors purchases for a specific product ID, and raises the price every time it's purchased, by the amount that you specify. (To be specific, this task will raise the price on the _individual variant_ that was purchased.)

## Default options

```json
{
  "product_id__required_number": null,
  "increase_price_by_this_much__number_required": null,
  "maximum_price__number": null
}
```

## Subscriptions

```liquid
shopify/orders/paid
```

## Documentation

This task monitors purchases for a specific product ID, and raises the price every time it's purchased, by the amount that you specify. (To be specific, this task will raise the price on the _individual variant_ that was purchased.)

Configure this task with the ID of the product you want to monitor. Find the product ID by opening the product in the Shopify admin, and using the numbers at the very end of the URL in your browser. For example, the product at `https://example.myshopify.com/admin/products/1234567890` would have a product ID of `1234567890`.
