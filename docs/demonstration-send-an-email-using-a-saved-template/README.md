# Demonstration: Send an email using a saved template

Tags: Demonstration, Email, Template

Send a message using one of your shop's saved email templates. This example runs only when you choose **Run task**, showing how a task's message fits inside a reusable layout.

* View in the task library: [tasks.mechanic.dev/demonstration-send-an-email-using-a-saved-template](https://tasks.mechanic.dev/demonstration-send-an-email-using-a-saved-template)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-send-an-email-using-a-saved-template.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_recipient__email_required": null,
  "email_subject__required": "A message from {{ shop.name }}",
  "email_body__multiline_required": "This message comes from your task.\n\nYour saved email template supplies the layout around it.",
  "email_template__emailtemplate_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Send a message using one of your shop's saved email templates. This example runs only when you choose **Run task**, showing how a task's message fits inside a reusable layout.

## Setup

1. Open **Settings → Email templates**. Create a visual layout, or choose **Use an existing email** to borrow the look of a forwarded email or saved `.eml`/`.html` file. Review the result and save it with a name you recognize.
2. Set **Email recipient** to your own address for your first run. Enter a subject and message, then choose the saved **Email template**. If you created it from the picker in a separate tab, use **Refresh templates** when you return.
3. Review the task's email preview, save the task, then choose **Run task** to send the message. Each run sends one email to the configured recipient.

The message is plain text: line breaks are preserved, and HTML is displayed as text. In a visual template it appears in the **Task message** section; the template provides the logo, colors, buttons, and footer. A saved HTML/Liquid template also works if it renders `{{ body }}` and does not require additional custom values.

To check only the visual layout, use **Send test email** on the template page. That sends fixed sample content from the current draft without saving it or running this task. This example sends your configured task message through the normal Email action. Neither flow adds attachments.

## Adapting this example

The `__emailtemplate_required` option makes the saved-template picker available. The script passes its selected name to the Email action's `template` option. Other tasks can calculate order or product content in their message, share one template option across several email actions, or use a separate option for each action. Selecting a template does not supply order/customer data by itself.

This is a separate example: you do not need to update existing library tasks to try it. Use it for transactional messages, not marketing or bulk email. See [Email templates](https://learn.mechanic.dev/platform/email/templates) for importing a look, images, and HTML/Liquid compatibility.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-send-an-email-using-a-saved-template), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-send-an-email-using-a-saved-template.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
