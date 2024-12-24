# Sync order timeline comments to the customer note

Tags: Comments, Customer Notes, Orders, Sync, Timeline

This task scans all customers and their orders, and copies any new timeline comments to the customer's note. Any existing content in the customer note will be preserved; each new comment will be added to the end of the note (or, optionally, to the beginning). Any edited timeline comments will be added as new note lines during the next scan.

* View in the task library: [tasks.mechanic.dev/sync-order-timeline-comments-to-the-customer-note](https://tasks.mechanic.dev/sync-order-timeline-comments-to-the-customer-note)
* Task JSON, for direct import: [task.json](../../tasks/sync-order-timeline-comments-to-the-customer-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "add_new_comments_to_the_beginning__boolean": true,
  "do_not_add_removed_comments_back_in__boolean": null,
  "comment_date_format__required": "%d/%m/%y",
  "automatically_trim_notes_after_a_one_day_warning__boolean": null,
  "send_errors_to_slack__boolean": null,
  "slack_incoming_webhook_url": null,
  "run_daily__boolean": false,
  "run_hourly__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.run_hourly__boolean %}
  mechanic/scheduler/hourly
{% elsif options.run_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task scans all customers and their orders, and copies any new timeline comments to the customer's note. Any existing content in the customer note will be preserved; each new comment will be added to the end of the note (or, optionally, to the beginning). Any edited timeline comments will be added as new note lines during the next scan.

Use the "Run task" button to run the scan manually. Or, enable the "Run daily" or "Run hourly" options to have Mechanic run this task automatically.

Notes:

* If adding new comments would bring the customer note length past the 5000-character limit, this task will either return an error or, if configured, send a Slack message with that error message. If it would require trimming less than 1000 characters to bring the new note within the limit, the task will do for that customer, so the next time the task runs.
* Mechanic adds a timestamp to the very end of the customer note, allowing it to skip comments it has already seen during the next run. The task will attempt to avoid duplicates without it, but we don't recommend removing it.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/sync-order-timeline-comments-to-the-customer-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-order-timeline-comments-to-the-customer-note.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
