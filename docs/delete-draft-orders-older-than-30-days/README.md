# Delete draft orders older than 30 days

Keep your draft order list tidy - use this task to automatically delete orders that are older than a configurable number of days.

* View in the task library: [usemechanic.com/task/delete-draft-orders-older-than-30-days](https://usemechanic.com/task/delete-draft-orders-older-than-30-days)
* Task JSON, for direct import: [task.json](../../tasks/delete-draft-orders-older-than-30-days.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "days_to_wait_before_deleting_a_draft_order__number_required": "30",
  "test_mode__boolean": true,
  "run_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Keep your draft order list tidy - use this task to automatically delete orders that are older than a configurable number of days.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/delete-draft-orders-older-than-30-days), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/delete-draft-orders-older-than-30-days.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
