# Reissue single-use discount codes after order cancellation

Tags: Cancel, Discounts, Orders

This task watches for cancellations of orders that have either a single-use discount code, or a discount code that can only be used once per customer. When such an order is found, this task creates a new copy of the discount exclusively for the related customer, using a new discount code, and emails it to the customer.

* View in the task library: [usemechanic.com/task/reissue-single-use-discount-codes-after-order-cancellation](https://usemechanic.com/task/reissue-single-use-discount-codes-after-order-cancellation)
* Task JSON, for direct import: [task.json](../../tasks/reissue-single-use-discount-codes-after-order-cancellation.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "ignore_discount_codes_containing_this_text": null,
  "email_subject__required": "We've issued you a new discount code",
  "email_body__required_multiline": "Hello,\n\nNow that order {{ order.name }} has been cancelled, we wanted to make sure you have another chance to use your discount.\n\nYour new discount code: REISSUED_DISCOUNT_CODE\n\nThanks,\n{{ shop.name }}",
  "email_bcc__email": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/cancelled
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for cancellations of orders that have either a single-use discount code, or a discount code that can only be used once per customer. When such an order is found, this task creates a new copy of the discount exclusively for the related customer, using a new discount code, and emails it to the customer.

This task only supports basic discounts, having up to 250 products or collections (if any). Shipping discounts and buy-one-get-one discounts are not supported.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/reissue-single-use-discount-codes-after-order-cancellation), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/reissue-single-use-discount-codes-after-order-cancellation.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
