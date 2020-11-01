# Delete draft orders older than 30 days

* [task.json](../../tasks/delete-draft-orders-older-than-30-days.json) (for import/export)
* [Task script](./script.liquid)

Keep your draft order list tidy - use this task to automatically delete orders that are older than a configurable number of days.

## Default options

```json
{
  "days_to_wait_before_deleting_a_draft_order__number_required": "30",
  "test_mode__boolean": true,
  "run_daily__boolean": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
```

## Documentation

Keep your draft order list tidy - use this task to automatically delete orders that are older than a configurable number of days.
