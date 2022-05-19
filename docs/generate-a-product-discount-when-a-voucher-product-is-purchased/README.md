# Generate a product discount when a voucher product is purchased

Tags: Discounts, Products, Watch

Use this task to sell vouchers for future purchases. Buy a product, receive an emailed discount code for a discount on another specific product.

* View in the task library: [tasks.mechanic.dev/generate-a-product-discount-when-a-voucher-product-is-purchased](https://tasks.mechanic.dev/generate-a-product-discount-when-a-voucher-product-is-purchased)
* Task JSON, for direct import: [task.json](../../tasks/generate-a-product-discount-when-a-voucher-product-is-purchased.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "voucher_product_ids_and_entitled_product_ids__keyval_number_required": {},
  "discount_code_prefix__required": "HOORAY",
  "discount_value__number_required": "-5",
  "email_subject__required": "[Order {{ order.name }}] Thanks! Your discount is attached.",
  "email_body__multiline_required": "Hi {{ order.customer.first_name | default: \"there\" }},\n\nThanks for your order! Here's your discount code:\n\n<code>DISCOUNT_CODE</code>\n\nYour purchase of VOUCHER_PRODUCT_TITLE has earned you a one-time discount on a future order of ENTITLED_PRODUCT_TITLE.\n\nThanks,\nThe team at {{ shop.name }}"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to sell vouchers for future purchases. Buy a product, receive an emailed discount code for a discount on another specific product.

### Getting started

Make sure each of your voucher products has a SKU filled in. This is important: the SKU will be a part of each generated discount code.

In Mechanic, fill in the "Voucher product IDs and entitled product IDs" option with the IDs of the voucher products you're selling on the left, and the IDs of products you want to be discounted on the right.

To find a product ID, open up each product in the Shopify admin, and look at the URL in your browser. The numbers at the very end are your product ID. For example, if this is the URL you're seeing:

```
https://example.myshopify.com/admin/products/1234567890
```

... then your product ID is `1234567890`.

### Background

For the purposes of this task, a "voucher product" is a product you sell to earn a discount to an "entitled product".

This task builds discount coupon codes that are single-use, for a fixed amount of money off a purchase on a specific entitled product.

To make unique discount codes, this task assembles codes using this format:

```
[PREFIX][ORDER NUMBER][VOUCHER SKU][QUANTITY COUNTER][CUSTOMER ID]
```

For example, discount codes might look like:

* `HOORAY1027SIMPLE1806736592949`
* `FLASH381EARLYRISER2914633758241`
* `PRESALE9912EAS135947168211735`

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/generate-a-product-discount-when-a-voucher-product-is-purchased), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/generate-a-product-discount-when-a-voucher-product-is-purchased.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
