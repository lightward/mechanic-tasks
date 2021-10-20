# Auto-price products based on their compare-at prices

Tags: Discounts, Price, Products

Use this task when the pricing for your products can be automatically calculated by multiplying with compare-at prices.

* View in the task library: [usemechanic.com/task/auto-price-products-based-on-their-compare-at-prices](https://usemechanic.com/task/auto-price-products-based-on-their-compare-at-prices)
* Task JSON, for direct import: [task.json](../../tasks/auto-price-products-based-on-their-compare-at-prices.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "multiplier_when_calculating_price__number_required": 0.8,
  "required_product_tag": null,
  "test_mode__boolean": true,
  "run_automatically_for_product_updates__boolean": false,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_automatically_for_product_updates__boolean %}
  shopify/products/update
{% endif %}

{% if options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task when the pricing for your products can be automatically calculated by multiplying with compare-at prices.

Run this task manually to process your entire product catalog, optionally filtering by product tag. Or, choose to have this task run whenever products are updated, or run daily, at midnight in your store's local timezone.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/auto-price-products-based-on-their-compare-at-prices), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-price-products-based-on-their-compare-at-prices.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
