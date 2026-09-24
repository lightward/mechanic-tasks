# Email Mechanic form submissions

Tags: Custom Webhook, Email, Storefront Forms

Email the answers from a Mechanic form submission to your team, optionally including uploaded files as attachments.

* View in the task library: [tasks.mechanic.dev/email-mechanic-form-submissions](https://tasks.mechanic.dev/email-mechanic-form-submissions)
* Task JSON, for direct import: [task.json](../../tasks/email-mechanic-form-submissions.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "webhook_event_topic__required": "user/forms/submission",
  "form__storefrontform": "",
  "email_recipients__email_array_required": null,
  "email_subject__required": "New form submission",
  "include_uploaded_files__boolean": false,
  "reply_to_email_field_key": ""
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{{ options.webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Email the answers from a Mechanic form submission to your team, optionally including uploaded files as attachments.

This task is for **Mechanic's form builder**. It uses the form's ordinary webhook and runs in the background alongside any Google Sheets, metaobject or other tasks subscribed to that topic. It does not create or publish a form, change its webhook, or send a message synchronously to the visitor.

## Setup

1. In the form's **Submission settings**, choose a webhook. Copy its exact event topic into **Webhook event topic**; the example `user/forms/submission` is not automatically connected.
2. Optionally choose a published form in **Form** to receive only that form. Leave it blank to handle any Mechanic form on the selected webhook.
3. Set **Email recipients** to the team members who should receive submissions, and choose an **Email subject**. Recipients come from task settings, never from the visitor's answers.
4. Optionally enable **Include uploaded files**. Optionally set **Reply to email field key** to a field such as `email`, so replying to the notification addresses the submitter. An omitted, empty or invalid answer does not set Reply-To. The supplied address is not proof of identity.
5. Save and enable the task. Your Mechanic account must be [approved to send email](https://learn.mechanic.dev/platform/email). Submit a test from the actual storefront and check the email action and recipient inbox. The preview inside Mechanic and the form inside Shopify’s theme editor do not send email. A storefront opened in a separate tab, including an unpublished theme preview, sends real submissions and can run this task. A form confirmation means the request was accepted; email delivery happens afterward and may fail independently.

## Answers and attachments

The email includes every submitted answer, identified by its form field data key, plus form/revision, submission/event IDs and received time. Arrays and addresses are shown as JSON. Hidden questions omitted by the form are not included; empty submissions still produce a notification. Answer text is HTML-escaped. Both ordinary and full-request webhook data modes work.

**Include uploaded files** is off by default. When enabled, files arrive as real email attachments using Mechanic's existing file generators; no Google connection or Shopify Files upload is required. Filenames are made safe and prefixed with the field key to avoid collisions. Original filenames appear in the message. When disabled, the email contains only file names and sizes, with no download links. Enable this option to receive the files by email. For lasting storage, also use the Google Sheets task with its Google Drive upload option on the same webhook topic. Files in the original event remain subject to normal event retention; this email task does not host files or create temporary download links.

Attachments may total at most **3 MB (3,145,728 bytes) per submission**. The task verifies base64 structure and byte counts before creating the email action. It also bounds the number/shape of fields and the combined answer/file-detail data to 100 KB. A malformed or oversized submission produces a task error and no email. File names and types are visitor-supplied; this task does not scan attachments.

This task sends a notification to the configured team. It does not automatically email a receipt to the submitter. The standard Mechanic sender and email template settings apply. You can use it alongside the [Google Sheets task](https://tasks.mechanic.dev/save-mechanic-form-submissions-to-a-google-sheet) and [metaobject task](https://tasks.mechanic.dev/save-mechanic-form-submissions-to-shopify-metaobjects).

## Replays and stopping

Replaying an event or retrying an email after an uncertain response can send another notification. The IDs help correlate messages; they do not guarantee delivery exactly once. Disabling this task stops future notifications and leaves the shared webhook and other subscribed tasks intact. When moving shops, configure recipients, email approval, and the new webhook topic again. If this task filters to one form, publish the imported form and select it in the **Form** dropdown.

See [Mechanic's Email action](https://learn.mechanic.dev/core/actions/email).


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/email-mechanic-form-submissions), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-mechanic-form-submissions.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
