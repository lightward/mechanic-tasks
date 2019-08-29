# Send a message to Slack

* [Task script](./script.liquid)

Purely for demonstration purposes, this task illustrates how one might set up a script to send Slack messages.

## Default options

```json
{
  "slack_incoming_webhook_url__required": null
}
```

## Subscriptions

```liquid
mechanic/user/trigger
```

## Documentation

Purely for demonstration purposes, this task illustrates how one might set up a script to send Slack messages. As written, this task requires a Slack incoming webhook URL - [learn how to generate this](https://api.slack.com/incoming-webhooks#getting-started). Then, [learn more about sending to Slack with Mechanic](https://help.usemechanic.com/en/articles/3297438-can-i-send-messages-to-slack).