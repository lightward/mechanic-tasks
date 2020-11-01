# Auto-capture order payments based on Kount risk assessments

* [task.json](../../tasks/auto-capture-order-payments-based-on-kount-risk-assessments.json) (for import/export)
* [Task script](./script.liquid)

An integration with Kount, this task allows you to immediately capture payments for orders that Kount has deemed to be of a certain risk level.

## Default options

```json
{
  "number_of_minutes_to_wait_before_capturing__number": null,
  "capture_orders_with_a_high_risk_level__boolean": null,
  "capture_orders_with_a_medium_risk_level__boolean": null,
  "capture_orders_with_a_low_risk_level__boolean": null
}
```

## Subscriptions

```liquid
{% assign n = options.number_of_minutes_to_wait_before_capturing__number %}

shopify/orders/create{% if n != blank and n > 0 %}+{{ n }}.minutes{% endif %}
```

## Documentation

An integration with Kount, this task allows you to immediately capture payments for orders that Kount has deemed to be of a certain risk level.

This task requires your Shopify store to have order risk data provided by [Kount](https://www.kount.com).
