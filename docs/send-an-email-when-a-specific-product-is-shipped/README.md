# Send an email when a specific product is shipped

* [task.json](../../tasks/send-an-email-when-a-specific-product-is-shipped.json) (for import/export)
* [Task script](./script.liquid)

Use this task to notify customers about product-specific information, that should only be delivered when a successful fulfillment is registered for their purchased product.

## Default options

```json
{
  "required_product_id__number_required": null,
  "email_subject__required": "Order {{ fulfillment.order.name | default: \"#1234\" }}: Your product has been shipped!",
  "email_body__multiline_required": "Hello,\n\nThanks for your order!\n\nCheers,\n{{ shop.name }}"
}
```

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
```

## Documentation

Use this task to notify customers about product-specific information, that should only be delivered when a successful fulfillment is registered for their purchased product.

This task requires a product ID. [Learn where to find this.](https://help.usemechanic.com/en/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

[YouTube: Watch the development video!](https://youtu.be/5atvVttJnbY)
