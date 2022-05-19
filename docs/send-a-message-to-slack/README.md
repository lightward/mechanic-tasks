# Send a message to Slack

Tags: Slack

Purely for demonstration purposes, this task illustrates how one might set up a script to send Slack messages. As written, this task requires a Slack incoming webhook URL - [learn how to generate this](https://api.slack.com/incoming-webhooks#getting-started). Then, [learn more about sending to Slack with Mechanic](https://help.usemechanic.com/en/articles/3297438-can-i-send-messages-to-slack).

* View in the task library: [tasks.mechanic.dev/send-a-message-to-slack](https://tasks.mechanic.dev/send-a-message-to-slack)
* Task JSON, for direct import: [task.json](../../tasks/send-a-message-to-slack.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "slack_incoming_webhook_url__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Purely for demonstration purposes, this task illustrates how one might set up a script to send Slack messages. As written, this task requires a Slack incoming webhook URL - [learn how to generate this](https://api.slack.com/incoming-webhooks#getting-started). Then, [learn more about sending to Slack with Mechanic](https://help.usemechanic.com/en/articles/3297438-can-i-send-messages-to-slack).

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-a-message-to-slack), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-a-message-to-slack.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
