# Raise the price of a product after every sale

Tags: Price, Products

This task monitors purchases for a specific product ID, and raises the price every time it's purchased, by the amount that you specify. (To be specific, this task will raise the price on the _individual variant_ that was purchased.)

* View in the task library: [usemechanic.com/task/raise-the-price-of-a-product-after-every-sale](https://usemechanic.com/task/raise-the-price-of-a-product-after-every-sale)
* Task JSON, for direct import: [task.json](../../tasks/raise-the-price-of-a-product-after-every-sale.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "product_id__required_number": null,
  "increase_price_by_this_much__number_required": null,
  "maximum_price__number": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task monitors purchases for a specific product ID, and raises the price every time it's purchased, by the amount that you specify. (To be specific, this task will raise the price on the _individual variant_ that was purchased.)

Configure this task with the ID of the product you want to monitor. Find the product ID by opening the product in the Shopify admin, and using the numbers at the very end of the URL in your browser. For example, the product at `https://example.myshopify.com/admin/products/1234567890` would have a product ID of `1234567890`.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/raise-the-price-of-a-product-after-every-sale), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/raise-the-price-of-a-product-after-every-sale.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
