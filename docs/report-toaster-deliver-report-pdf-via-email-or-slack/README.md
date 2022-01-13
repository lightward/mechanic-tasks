# Report Toaster: Deliver report PDF via email or Slack

Tags: (not tagged!)

This task demonstrates how a report can be requested from Report Toaster as a PDF. Once delivered, it is emailed to one or more recipients and/or sent to a Slack channel.

* View in the task library: [usemechanic.com/task/report-toaster-deliver-report-pdf-via-email-or-slack](https://usemechanic.com/task/report-toaster-deliver-report-pdf-via-email-or-slack)
* Task JSON, for direct import: [task.json](../../tasks/report-toaster-deliver-report-pdf-via-email-or-slack.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "report_id__required": null,
  "email_report_recipients__array": null,
  "slack_incoming_webhook_url": null,
  "message_body__multiline_required": "Hello,\n\nYour report is now available for download:\n\nReport Name: {{ event.data.name }}\nDownload Link: {{ event.data.file.url }}\n\nEnjoy!",
  "run_this_task_daily__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
{% if options.run_this_task_daily__boolean %}
  mechanic/scheduler/daily
{% endif %}
mechanic/user/trigger
report_toaster/reports/create

```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task demonstrates how a report can be requested from Report Toaster as a PDF. Once delivered, it is emailed to one or more recipients and/or sent to a Slack channel.

You can use this task with any pre-built or custom report from Report Toaster by simply changing the report id. Learn how to find your report id [here](https://support.cloudlab.com/portal/en/kb/articles/how-do-i-run-a-report-from-a-mechanic-task).

The report can be requested via CSV or PDF by changing the file format property. If the file format is omitted, the report results are returned as JSON directly within the task result.

See the [Report Toaster](https://learn.mechanic.dev/platform/integrations/report-toaster) section of the Mechanic docs for more information.

The task can be run manually, or optionally, set to run as a daily report by checking the "Run this task daily" option. If a less frequent schedule is desired, then you may modify the **mechanic/scheduler/daily** subscription to another frequency. See the [scheduler](https://learn.mechanic.dev/platform/events/topics#scheduler) section in the docs for more details."

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/report-toaster-deliver-report-pdf-via-email-or-slack), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/report-toaster-deliver-report-pdf-via-email-or-slack.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
