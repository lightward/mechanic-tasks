# Clean up draft orders

* [task.json](../../tasks/clean-up-draft-orders.json) (for import/export)
* [Task script](./script.liquid)

Use this task to quickly delete draft orders from your account, optionally filtering by status, or by draft order age. Useful for keeping things tidy. :)

## Default options

```json
{
  "delete_open_draft_orders__boolean": null,
  "delete_draft_orders_that_have_invoices_sent__boolean": null,
  "delete_completed_draft_orders__boolean": null,
  "minimum_draft_order_age_in_days__number": null,
  "run_daily_at_midnight__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily_at_midnight__boolean %}
  mechanic/scheduler/daily
{% endif %}
```

## Documentation

Use this task to quickly delete draft orders from your account, optionally filtering by status, or by draft order age. Useful for keeping things tidy. :)
