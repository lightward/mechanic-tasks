# Cancel and close unpaid orders after x hours/days

* [Task script](./script.liquid)

Clear the clutter in your orders list, automatically! On a scheduled basis or on-demand, this task scans for orders that are more than x days or hours old, and cancels and closes/archives the order if its financial status is still marked "pending".

## Default options

```json
{
  "only_process_orders_having_this_tag": null,
  "period_to_wait_before_checking_each_order__number_required": 1,
  "period_to_wait_is_in_hours__boolean": null,
  "period_to_wait_is_in_days__boolean": true,
  "tag_to_add_to_the_order": null,
  "void_payment_when_possible__boolean": null,
  "cancel_fulfillment_and_restock_to_default_location__boolean": null,
  "send_cancellation_email_to_customer__boolean": false,
  "test_mode__boolean": true
}
```

## Subscriptions

```liquid
{% if options.period_to_wait_is_in_hours__boolean %}
  mechanic/scheduler/hourly
{% elsif options.period_to_wait_is_in_days__boolean %}
  mechanic/scheduler/daily
{% endif %}

mechanic/user/trigger
```

## Documentation

This task scans for orders that are more than X days or hours old that have a financial status of "pending", and ensures that they are all closed/archived and cancelled. Orders that are already closed will be cancelled, and orders that are already cancelled will be closed. Optionally, choose to add a tag to such orders, and Mechanic will ensure that all qualifying orders receive your chosen tag.

Run first using test mode, to ensure expected results before running without it.

If configured with an interval in hours, this task will run hourly. If configured with an interval in days, the task will run every night at midnight, in your store's local timezone. Run this task manually to perform the scan on demand.

Tip: To easily see which orders this task has cancelled, fill in the "Tag to add to the order" option.