# Auto-tag customers within a purchase range

Tags: Auto-Tag, Customers, Loyalty

Use this task to auto-tag customers when their historical purchase total falls within a certain range. For example, by configuring this task to evaluate purchase thresholds by number of orders, and by setting the minimum to "1" and the maximum to "12", this task will auto-tag customers who've made at least 1 purchase, and will *remove* the tag when the 13th purchase is made.

* View in the task library: [usemechanic.com/task/auto-tag-customers-within-a-purchase-range](https://usemechanic.com/task/auto-tag-customers-within-a-purchase-range)
* Task JSON, for direct import: [task.json](../../tasks/auto-tag-customers-within-a-purchase-range.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "purchase_minimum__number_required": "",
  "purchase_maximum__number_required": "",
  "evaluate_purchase_thresholds_by_number_of_orders__boolean": true,
  "evaluate_purchase_thresholds_by_adding_line_item_quantities__boolean": false,
  "evaluate_purchase_thresholds_by_adding_line_item_subtotals__boolean": false,
  "only_count_paid_orders__boolean": false,
  "only_count_this_product_id__number": "",
  "customer_tag_to_apply__required": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.only_count_paid_orders__boolean %}
  shopify/orders/paid
{% else %}
  shopify/orders/create
{% endif %}

shopify/orders/cancelled
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to auto-tag customers when their historical purchase total falls within a certain range. For example, by configuring this task to evaluate purchase thresholds by number of orders, and by setting the minimum to "1" and the maximum to "12", this task will auto-tag customers who've made at least 1 purchase, and will *remove* the tag when the 13th purchase is made.

This task can total up purchases by number of orders, adding line item quantities, or by adding line item subtotals. Optionally, choose a specific product ID to filter by. [Learn how to find a product ID](https://docs.usemechanic.com/article/360-how-do-i-find-an-id-for-a-product-collection-order-or-something-else)

This task will run whenever a new order is created (or paid, if you choose to only count paid orders), and whenever an order is cancelled.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-tag-customers-within-a-purchase-range), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-tag-customers-within-a-purchase-range.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
