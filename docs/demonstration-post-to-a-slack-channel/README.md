# Demonstration: Post to a Slack channel

Tags: Demonstration, Integration, Slack

# Demonstration: Post to a Slack channel

* View in the task library: [tasks.mechanic.dev/demonstration-post-to-a-slack-channel](https://tasks.mechanic.dev/demonstration-post-to-a-slack-channel)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-post-to-a-slack-channel.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "slack_account__required": null,
  "slack_channel_id__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

# Demonstration: Post to a Slack channel

This task posts a demonstration message in the Slack channel of your choice. Try it out to learn how the Slack action works!

## Quick Start

1. Install the Mechanic Slack app in your Slack workspace (Settings → Authentication → Slack)
3. Set two task options:
    - Your Slack account
    - The Slack channel ID to post to
      - If this is a private channel, then you must add the Mechanic bot to the channel before it can post messages
4. Run the task

Look in your Slack channel for the demonstration message. (Although you'll likely get a combination of app, email, and web notifications for this one post 😂)

## Want to Learn More?

This task demonstrates how to:
- Create a new message in an Slack channel
- Build dynamic message structure with some common Slack block kit components: header, section, divider, button

Take a look at the task code to see exactly how it works, then use this example in your own tasks.

Slack has extensive API documentation covering the many endpoints this integration can utilize. In relation to this demo task, the following API docs are the most relevant:
- https://docs.slack.dev/reference/methods/chat.postmessage
- https://docs.slack.dev/messaging/
- https://docs.slack.dev/block-kit/

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-post-to-a-slack-channel), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-post-to-a-slack-channel.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
