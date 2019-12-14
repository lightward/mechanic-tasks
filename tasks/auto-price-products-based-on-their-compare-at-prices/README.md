# Auto-price products based on their compare-at prices

* [Task script](./script.liquid)

Use this task when the pricing for your products can be automatically calculated by multiplying with compare-at prices.

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

## Documentation

Run this task manually to process your entire product catalog, optionally filtering by product tag. Or, choose to have this task run whenever products are updated, or run daily, at midnight in your store's local timezone.