# Auto-capture payments when an order is created

* [task.json](../../tasks/auto-capture-payments-when-an-order-is-created.json) (for import/export)
* [Task script](./script.liquid)

This task runs immediately after an order is created, and captures an authorized transaction if one is present. Choose which risk levels to capture for, and optionally choose to filter by order tag. You may also choose to only capture funds for line items that do not require shipping.

## Default options

```json
{
  "number_of_minutes_to_wait_before_capturing__number": null,
  "capture_orders_with_a_high_risk_level__boolean": true,
  "capture_orders_with_a_medium_risk_level__boolean": true,
  "capture_orders_with_a_low_risk_level__boolean": true,
  "required_order_tag": null,
  "only_capture_for_line_items_that_do_not_require_shipping__boolean": false
}
```

## Subscriptions

```liquid
{% assign n = options.number_of_minutes_to_wait_before_capturing__number %}

shopify/orders/create{% if n != blank and n > 0 %}+{{ n }}.minutes{% endif %}
```

## Documentation

This task runs immediately after an order is created, and captures an authorized transaction if one is present. Choose which risk levels to capture for, and optionally choose to filter by order tag. You may also choose to only capture funds for line items that do not require shipping.

This task runs immediately after an order is created. If you are selectively capturing by risk level, and if you have additional apps informing an order's risk level, increase "Number of minutes to wait before capturing" to make sure those apps have time to contribute their data.
