# Send recurring reminders about unpaid orders

* [task.json](../../tasks/unpaid-order-reminders.json) (for import/export)
* [Task script](./script.liquid)

null

## Default options

```json
{
  "include_partially_paid_orders__boolean": false,
  "limit_to_orders_matching_this_query": "tag:sendreminder",
  "ignore_customers_having_this_tag": null,
  "initial_delay_period__number_required": null,
  "interval_period_between_emails__number_required": null,
  "periods_given_are_in_days__boolean": null,
  "periods_given_are_in_hours__boolean": null,
  "email_subject__required": "Order ORDER_NUMBER: AMOUNT_DUE is still outstanding!",
  "email_body__multiline_required": "Hello,\n\nFor your order (ORDER_NUMBER), we still require AMOUNT_DUE.\n\nThanks,\n{{ shop.name }}",
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
mechanic/scheduler/hourly
```

## Documentation

null
