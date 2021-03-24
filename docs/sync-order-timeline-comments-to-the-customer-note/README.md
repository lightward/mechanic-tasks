# Sync order timeline comments to the customer note

Tags: Comments, Customer Notes, Orders, Sync, Timeline

This task scans all orders (optionally filtering by the query of your choice), and copies any new timeline comments to the customer's note. Useful for getting a snapshot of order activity when looking at the customer's record. Runs manually, hourly, and/or daily.

* View in the task library: [usemechanic.com/task/sync-order-timeline-comments-to-the-customer-note](https://usemechanic.com/task/sync-order-timeline-comments-to-the-customer-note)
* Task JSON, for direct import: [task.json](../../tasks/sync-order-timeline-comments-to-the-customer-note.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "only_process_customers_matching_this_query": null,
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_daily__boolean %}mechanic/scheduler/daily{% endif %}
{% if options.run_hourly__boolean %}mechanic/scheduler/hourly{% endif %}
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task scans all orders (optionally filtering by the query of your choice), and copies any new timeline comments to the customer's note. Useful for getting a snapshot of order activity when looking at the customer's record. Runs manually, hourly, and/or daily.

This task scans all orders (optionally filtering by the query of your choice), and copies any new timeline comments to the customer's note. Any existing content in the customer note will be preserved; each new comment will be added to the end of the note (or, optionally, to the beginning). Any edited timeline comments will be added as new note lines during the next scan.

Use the "Run task" button to run the scan manually. Or, enable the "Run daily" and/or "Run hourly" options to have Mechanic run this task automatically.

Notes:

* This task uses bulk operations, and therefore operates in two stages: (a) sending the initial query to Shopify, and then (b) processing the results when they come in, as a new event.
* If adding new comments would bring the customer note length past the 5000-character limit, this task will either return an error or ([if configured](https://help.usemechanic.com/en/articles/3297438-can-i-send-messages-to-slack)) send a Slack message with that error message. If it would require trimming less than 1000 characters to bring the new note within the limit, the task will do for that customer, so the next time the task runs.
* Mechanic adds a timestamp to the very end of the customer note, allowing it to skip comments it has already seen during the next run. The task will attempt to avoid duplicates without it, but we don't recommend removing it.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/sync-order-timeline-comments-to-the-customer-note), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-order-timeline-comments-to-the-customer-note.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
