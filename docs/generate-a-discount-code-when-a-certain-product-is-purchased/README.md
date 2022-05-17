# Generate a discount code when a certain product is purchased

Tags: Discounts, Marketing, Products, Retention

This task watches for newly-paid orders, and if the configured product is purchased, sends the customer a discount code that's just for them. Optionally, configure the discounts to only apply to a certain collection of products, and to only last for a certain number of days.

* View in the task library: [tasks.mechanic.dev/generate-a-discount-code-when-a-certain-product-is-purchased](https://tasks.mechanic.dev/generate-a-discount-code-when-a-certain-product-is-purchased)
* Task JSON, for direct import: [task.json](../../tasks/generate-a-discount-code-when-a-certain-product-is-purchased.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "required_product_id__number_required": null,
  "discount_collection_id__number": null,
  "discount_code_prefix": null,
  "discount_fixed_amount__number": null,
  "discount_percentage__number": "50",
  "discount_applies_to_each_line_item_individually__boolean": true,
  "discount_lifetime_in_days__number": "365",
  "email_subject__required": "Thanks for your purchase! Your discount code is DISCOUNT_CODE.",
  "email_body__multiline_required": "Thanks for your purchase! Here's your discount code: <b>DISCOUNT_CODE</b>\n\n<a href=\"https://{{ shop.domain }}/\">Start shopping now!</a>\n\nThanks,\n{{ shop.name }}",
  "discount_can_be_used_by_anyone__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for newly-paid orders, and if the configured product is purchased, sends the customer a discount code that's just for them. Optionally, configure the discounts to only apply to a certain collection of products, and to only last for a certain number of days.

This task watches for newly-paid orders, and if the configured product is purchased, sends the customer a discount code that's just for them. If a customer purchases more than one qualified product, they will receive more than one email, each containing a unique discount code.

### Options

* **Required product ID:** The ID of the product that the customer must purchase, in order to qualify for the discount. ([Learn how to find the product ID.](https://help.usemechanic.com/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else))
* **Discount collection ID (optional):** The ID of a specific collection of products that the discount code should be good for. ([Learn how to find the collection ID.](https://help.usemechanic.com/articles/2946120-how-do-i-find-an-id-for-a-product-collection-order-or-something-else))
* **Discount code prefix (optional):** A small piece of text to add to the beginning of the generated discount code.
* **Discount fixed amount:** The money value to be subtracted. If you choose this option, you cannot choose a discount percentage.
* **Discount percentage:** The percentage to be subtracted. If you choose this option, you cannot choose a fixed discount amount.
* **Discount applies to each line item individually:** If enabled, the discount will apply to each item ordered. If disabled, the discount will only apply once per order.
* **Discount lifetime in days:** How long the discount should be active.
* **Discount can be used by anyone:** If enabled, the discount code can be used by anyone. If disabled, the discount code can only be used by the purchasing customer.
* **Email subject, body:** The content to email to the customer. Use "DISCOUNT_CODE" as a placeholder for the generated discount code.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/generate-a-discount-code-when-a-certain-product-is-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/generate-a-discount-code-when-a-certain-product-is-purchased.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
