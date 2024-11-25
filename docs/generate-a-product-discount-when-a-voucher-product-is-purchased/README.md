# Generate a product discount when a voucher product is purchased

Tags: Discounts, Products, Watch

Use this task to generate discounts for future purchases. When a customer buys a "voucher" product, they will be emailed a single-use discount code for either a fixed amount of money or percentage off a purchase on a corresponding "entitled" product".

* View in the task library: [tasks.mechanic.dev/generate-a-product-discount-when-a-voucher-product-is-purchased](https://tasks.mechanic.dev/generate-a-product-discount-when-a-voucher-product-is-purchased)
* Task JSON, for direct import: [task.json](../../tasks/generate-a-product-discount-when-a-voucher-product-is-purchased.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "voucher_product_ids_and_entitled_product_ids__keyval_number_required": {},
  "discount_code_prefix__required": "HOORAY",
  "discount_value__number_required": "5",
  "email_subject__required": "[Order ORDER_NAME] Thanks! Your discount is attached.",
  "email_body__multiline_required": "Hi CUSTOMER_FIRST_NAME,\n\nThanks for your order! Here's your discount code:\n\n<code>DISCOUNT_CODE</code>\n\nYour purchase of VOUCHER_PRODUCT_TITLE has earned you a one-time discount on a future order of ENTITLED_PRODUCT_TITLE.\n\nThanks,\nThe team at {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to generate discounts for future purchases. When a customer buys a "voucher" product, they will be emailed a single-use discount code for either a fixed amount of money or percentage off a purchase on a corresponding "entitled" product".

If a customer purchases more than one voucher product, they will receive more than one email, each containing a unique discount code.

### Options

- **Voucher product IDs and entitled product IDs:** Enter the IDs of the voucher products you're selling on the left, and the IDs of products you want to be discounted on the right. ([Learn how to find the product IDs.](https://learn.mechanic.dev/techniques/finding-a-resource-id))
- **Discount code prefix:** A small piece of text to add to the beginning of the generated discount code.
- **Discount fixed amount:** The money value to be subtracted. If you choose this option, you cannot choose a discount percentage.
- **Discount percentage:** The percentage to be subtracted (e.g. 15). If you choose this option, you cannot choose a fixed discount amount.
- **Email subject, body:** The content to email to the customer. May use the following variables:
  - CUSTOMER_FIRST_NAME
  - DISCOUNT_CODE
  - ENTITLED_PRODUCT_TITLE
  - ORDER_NAME
  - VOUCHER_PRODUCT_TITLE

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/generate-a-product-discount-when-a-voucher-product-is-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/generate-a-product-discount-when-a-voucher-product-is-purchased.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
