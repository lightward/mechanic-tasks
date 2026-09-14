# Save Mechanic form submissions to Shopify metaobjects

Tags: Custom Webhook, Metafields

Save answers from Mechanic form submissions as Shopify metaobject entries, with storefront access disabled and attachment details for reference.

* View in the task library: [tasks.mechanic.dev/save-mechanic-form-submissions-to-shopify-metaobjects](https://tasks.mechanic.dev/save-mechanic-form-submissions-to-shopify-metaobjects)
* Task JSON, for direct import: [task.json](../../tasks/save-mechanic-form-submissions-to-shopify-metaobjects.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "webhook_event_topic__required": "user/forms/submission",
  "form_id": "",
  "form_name": ""
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{{ options.webhook_event_topic__required }}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Save answers from Mechanic form submissions as Shopify metaobject entries, with storefront access disabled and attachment details for reference.

These tasks are for **Mechanic's form builder**, not Shopify Forms. Submissions use your ordinary webhook, pass through AWS, and run subscribed tasks in the background. Installing this task does not create or publish a form, change its webhook, or place a theme block.

## Connect a form

1. In the form's **Submission settings**, choose a webhook. Copy its exact event topic into **Webhook event topic** in this task; the example `user/forms/submission` is not automatically connected.
2. Optionally paste the form's code into **Form ID** to save only that form. Leave it blank to handle any Mechanic form on this webhook. Form codes and submission IDs identify visitor input, not authenticated customers.
3. Complete the destination setup below, save and enable the task, then refresh the form's connected tasks. Disabled tasks do not save submissions.
4. Send a test from the actual storefront, then check the resulting task action and destination. The builder and theme-editor previews do not send anything. The form's confirmation does not guarantee that a storage action succeeded.

Both ordinary and full-request webhook data modes work. Scalar answers, including numbers and checkbox values, remain strings; multiple-choice arrays and addresses retain their structure. Hidden questions omitted by the form are not saved. The task rejects malformed values and answers/file details larger than 100 KB; file contents do not count toward that task storage limit because they are not copied.

## Uploaded files

**This task saves file details, not uploaded files.** It records each attachment's field key, name, reported MIME type and size, and `contents_saved: false`. It never stores base64 contents in a sheet or metaobject, uploads documents to Shopify Files, or publishes download links. The original file remains in the ordinary Mechanic event and expires with that event's retention. Install or write a separate file-archiving task if files must be kept longer. File names, MIME types and sizes are visitor-supplied details, not verified content.

## Moving shops or stopping

Set up the destination and reconnect the new shop's webhook when moving this task or importing a form. Imported forms have new form codes; update **Form ID** accordingly. Disabling the task stops future saves and leaves existing records and the shared webhook intact. Other subscribed tasks can still run.

## Shopify setup

1. Optionally set **Form name** to a short recognizable name, such as Warranty request. It labels entries; it does not choose or authenticate the form. If blank, the form code is used.
2. Save the task and grant its requested Shopify metaobject permissions. Run it manually once to create the **Mechanic form submission** definition (`mechanic_form_submission`). If a compatible definition already exists with storefront access off, the task leaves it unchanged.
3. After that setup action succeeds, submissions create entries under **Content → Metaobjects → Mechanic form submission** in Shopify. Each entry contains the form code/revision, submission and Mechanic event IDs, received time, all answers as JSON, and file details as JSON. This generic structure supports changing questions without a new metaobject definition for every form.

The task checks the existing definition before writing, including on reruns. It refuses definitions with storefront access enabled, incompatible field types, or extra required fields. It never automatically changes an existing definition. Keep storefront access disabled: these entries may contain customer information. Merchant-owned entries remain accessible to authorized Shopify staff and apps; this is not a private file vault.

## Retries and duplicates

The entry handle is derived from the **Mechanic event ID**. Rerunning the same event updates the same entry instead of creating another. The browser-supplied submission ID is stored only for reference; it cannot select and overwrite a previous entry. A second HTTP submission creates a different Mechanic event and therefore a separate entry, even if its browser submission ID is the same. Review those as possible duplicates.

This task does not link records to a customer or order based on visitor-supplied IDs. Extend its code deliberately if you need authenticated associations or mappings into a different metaobject definition. Shopify's record limits and permissions still apply; inspect failed actions before treating a submission as saved.

See [Shopify metaobject entries](https://shopify.dev/docs/apps/build/metaobjects/manage-metaobjects).


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/save-mechanic-form-submissions-to-shopify-metaobjects), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/save-mechanic-form-submissions-to-shopify-metaobjects.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
