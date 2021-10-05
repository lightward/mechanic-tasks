# Send an email when a specific product is shipped

Tags: Email, Products, Shipping

Use this task to notify customers about product-specific information, that should only be delivered when a successful fulfillment is registered for their purchased product.

* View in the task library: [usemechanic.com/task/send-an-email-when-a-specific-product-is-shipped](https://usemechanic.com/task/send-an-email-when-a-specific-product-is-shipped)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-when-a-specific-product-is-shipped.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_product_id__number_required": null,
  "email_subject__required": "Order {{ fulfillment.order.name | default: \"#1234\" }}: Your product has been shipped!",
  "email_body__multiline_required": "Hello,\n\nThanks for your order!\n\nCheers,\n{{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/fulfillments/create
shopify/fulfillments/update
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to notify customers about product-specific information, that should only be delivered when a successful fulfillment is registered for their purchased product.

This task requires a product ID. [Learn where to find this.](https://learn.mechanic.dev/techniques/finding-a-resource-id)

[YouTube: Watch the development video!](https://youtu.be/5atvVttJnbY)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/send-an-email-when-a-specific-product-is-shipped), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-when-a-specific-product-is-shipped.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
