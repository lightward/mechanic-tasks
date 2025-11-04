# Error reporter

Tags: Alert, Email, Error, Slack

Use this task to get email or Slack notifications when errors occur with any events, tasks, and actions in Mechanic. Use this task out of the box, customize it, or borrow logic for your more advanced error reporting tasks.

* View in the task library: [tasks.mechanic.dev/error-reporter](https://tasks.mechanic.dev/error-reporter)
* Task JSON, for direct import: [task.json](../../tasks/error-reporter.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "notification_methods__multiselect_o1_email_o2_slack_required": null,
  "email_recipients__array": null,
  "slack_account": null,
  "slack_channel_id_": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/errors/event
mechanic/errors/task
mechanic/errors/action
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to get email or Slack notifications when errors occur with any events, tasks, and actions in Mechanic. Use this task out of the box, customize it, or borrow logic for your more advanced error reporting tasks.

[Read more about error events](https://learn.mechanic.dev/platform/error-handling).

**IMPORTANT**: To use Slack notifications, you must install the Mechanic Slack app in your Slack workspace (Settings → Authentication → Slack) and confiure a Slack account and Slack channel ID in this task. If the configured channel is private, then you will need to add the Mechanic bot to the channel before it can post messages (`/invite @mechanic`).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/error-reporter), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/error-reporter.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
