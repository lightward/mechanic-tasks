# Trigger order emails with a tag

Tags: Email, Orders, Tag, Watch

This task monitors order tags, and sends out an email that you configure whenever a certain tag is added. Supports email templates, and sending to custom recipients.

* View in the task library: [tasks.mechanic.dev/trigger-order-emails-with-a-tag](https://tasks.mechanic.dev/trigger-order-emails-with-a-tag)
* Task JSON, for direct import: [task.json](../../tasks/trigger-order-emails-with-a-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_trigger_tag__required": "email",
  "email_sent_tag__required": "sent",
  "email_subject__required": "About your order: {{ order.name }}",
  "email_body_html__required_multiline_code": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task monitors order tags, and sends out an email that you configure whenever a certain tag is added. Supports email templates, and sending to custom recipients.

This task monitors order tags, and sends out an email that you configure whenever a certain tag is added.

By default, this email will be sent to the address on file for the order. However, you can specify a custom recipient by tagging the order with "email:custom@example.com". (This example assumes you use "email" as your email trigger tag.)

When this task sends out an email, it removes the tag that triggered the message, replacing it with the email used for delivery, prefixed with the "email sent" tag.

Feel free to tag the order with multiple trigger tags at once, e.g. "email", "email:customer@example.com", "email:sales@example.com". After processing, Mechanic will leave the task tagged "sent", "sent:customer@example.com:sent", "sent:sales@example", leaving any and all other tags untouched.

Please note: Shopify restricts order tags to 40 characters in length.

To re-use your store's confirmation email template, or to use any other email template, [configure your email template with Mechanic](https://help.usemechanic.com/en/articles/2722264-add-an-email-template), and add the Mechanic email template name to your task.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/trigger-order-emails-with-a-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/trigger-order-emails-with-a-tag.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
