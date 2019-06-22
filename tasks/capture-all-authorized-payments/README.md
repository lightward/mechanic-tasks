# Capture all authorized payments

* [Task script](./script.liquid)

This task will scan for all orders that have a financial status of "authorized", and will capture payment for them. This task can be scheduled to run daily, and can be run on demand.

## Default options

```json
{
  "include_partially_paid_orders__boolean": false,
  "run_daily__boolean": false,
  "hours_to_wait_after_midnight_when_running_daily__number": null
}
```

## Subscriptions

```liquid
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% if options.hours_to_wait_after_midnight_when_running_daily__number %}+{{ options.hours_to_wait_after_midnight_when_running_daily__number | times: 60 | round }}.minutes{% endif %}{% endif %}
mechanic/user/trigger
```

## Documentation

This task will scan for all orders that have a financial status of "authorized", and will capture payment for them. Enable "Run daily" to perform this every day at midnight, or use the "Run task" button to perform this scan on demand.