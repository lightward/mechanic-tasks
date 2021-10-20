# Email customers after purchasing a certain product

Tags: Customers, Email, Orders, Products

Send an email to the customer with specific information regarding a product they just purchased. Useful for digital products, or anytime you'd like to communicate something extra about a product you offer. (Note: this does not replace the Shopify order confirmation email!)

* View in the task library: [usemechanic.com/task/product-order-email](https://usemechanic.com/task/product-order-email)
* Task JSON, for direct import: [task.json](../../tasks/product-order-email.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": null,
  "email_body__multiline_required": null,
  "product_sku__required": null,
  "days_to_wait_before_emailing__number": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create{% if options.days_to_wait_before_emailing__number != blank %}+{{ options.days_to_wait_before_emailing__number }}.days{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Send an email to the customer with specific information regarding a product they just purchased. Useful for digital products, or anytime you'd like to communicate something extra about a product you offer. (Note: this does not replace the Shopify order confirmation email!)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/product-order-email), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/product-order-email.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
