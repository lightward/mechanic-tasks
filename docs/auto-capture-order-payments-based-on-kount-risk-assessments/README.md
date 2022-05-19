# Auto-capture order payments based on Kount risk assessments

Tags: Kount, Payment, Risk

An integration with Kount, this task allows you to immediately capture payments for orders that Kount has deemed to be of a certain risk level.

* View in the task library: [tasks.mechanic.dev/auto-capture-order-payments-based-on-kount-risk-assessments](https://tasks.mechanic.dev/auto-capture-order-payments-based-on-kount-risk-assessments)
* Task JSON, for direct import: [task.json](../../tasks/auto-capture-order-payments-based-on-kount-risk-assessments.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "number_of_minutes_to_wait_before_capturing__number": null,
  "capture_orders_with_a_high_risk_level__boolean": null,
  "capture_orders_with_a_medium_risk_level__boolean": null,
  "capture_orders_with_a_low_risk_level__boolean": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% assign n = options.number_of_minutes_to_wait_before_capturing__number %}

shopify/orders/create{% if n != blank and n > 0 %}+{{ n }}.minutes{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

An integration with Kount, this task allows you to immediately capture payments for orders that Kount has deemed to be of a certain risk level.

This task requires your Shopify store to have order risk data provided by [Kount](https://www.kount.com).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-capture-order-payments-based-on-kount-risk-assessments), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-capture-order-payments-based-on-kount-risk-assessments.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
