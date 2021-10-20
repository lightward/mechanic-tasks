# Auto-tag customers based on discount codes used

Tags: Auto-Tag, Customers, Discounts

Use this task to easily identify customers who used certain discount codes. This task runs automatically on incoming orders, and can be run manually to tag customers based on historical orders. Optionally, choose to remove tags, instead of adding them.

* View in the task library: [usemechanic.com/task/auto-tag-customers-based-on-discount-codes-used](https://usemechanic.com/task/auto-tag-customers-based-on-discount-codes-used)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-based-on-discount-codes-used.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "discount_codes_and_tags__keyval_required": {},
  "untag_customers_instead_of_tagging_them__boolean": null,
  "allow_partial_matches_when_checking_for_discount_codes__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to easily identify customers who used certain discount codes. This task runs automatically on incoming orders, and can be run manually to tag customers based on historical orders. Optionally, choose to remove tags, instead of adding them.

This task runs automatically on incoming orders. Run this task manually to scan your store's order history, tagging customers based on historical orders.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-based-on-discount-codes-used), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-based-on-discount-codes-used.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
