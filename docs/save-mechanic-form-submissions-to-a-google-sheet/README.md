# Save Mechanic form submissions to a Google Sheet

Tags: Custom Webhook, Google Drive, Google Sheets

Save selected answers from Mechanic form submissions as rows in a Google Sheet, with optional Google Drive uploads and file links.

* View in the task library: [tasks.mechanic.dev/save-mechanic-form-submissions-to-a-google-sheet](https://tasks.mechanic.dev/save-mechanic-form-submissions-to-a-google-sheet)
* Task JSON, for direct import: [task.json](../../tasks/save-mechanic-form-submissions-to-a-google-sheet.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "webhook_event_topic__required": "user/forms/submission",
  "form_id": "",
  "google_account__required": null,
  "spreadsheet_title__required": "Mechanic form submissions",
  "spreadsheet_id": "",
  "column_headings_and_field_keys__keyval_required": {
    "Name": "name",
    "Email": "email"
  },
  "save_uploaded_files_to_google_drive__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
{{ options.webhook_event_topic__required }}
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Save selected answers from Mechanic form submissions as rows in a Google Sheet, with optional Google Drive uploads and file links.

This task is for **Mechanic's form builder**, not Shopify Forms. Submissions use your ordinary webhook, pass through AWS, and run subscribed tasks in the background. Installing this task does not create or publish a form, change its webhook, or place a theme block.

## Connect a form

1. In the form's **Submission settings**, choose a webhook. Copy its exact event topic into **Webhook event topic** in this task; the example `user/forms/submission` is not automatically connected.
2. Optionally paste the form's code into **Form ID** to save only that form. Leave it blank to handle any Mechanic form on this webhook. Form codes and submission IDs identify visitor input, not authenticated customers.
3. Complete the destination setup below, save and enable the task, then refresh the form's connected tasks. Disabled tasks do not save submissions.
4. Send a test from the actual storefront, then check the resulting task action and destination. The builder and theme-editor previews do not send anything. The form's confirmation does not guarantee that a storage action succeeded.

Both ordinary and full-request webhook data modes work. Scalar answers, including numbers and checkbox values, remain strings; multiple-choice arrays and addresses retain their structure. Hidden questions omitted by the form are not saved. The task rejects malformed values and answers/file details larger than 100 KB. Saving uploaded file contents has a separate 3 MB total limit, described below.

## Uploaded files

**Save uploaded files to Google Drive** is off by default. When off, the task saves file names, reported MIME types and sizes, and `contents_saved: false`. The original contents remain in the ordinary Mechanic event and expire with its retention.

Enable this option to keep the files in the connected Google account. Files are organized under **Mechanic form uploads**, grouped by form code and Mechanic event. The task uploads them first, then uses `mechanic/actions/perform` to add a spreadsheet row containing the returned Drive links and `contents_saved: true`. Base64 contents are never placed in spreadsheet cells. Submissions without files are saved immediately.

No public sharing is enabled by this task. Drive folder/file permissions determine who can open the links; sharing a spreadsheet does not automatically grant access to its linked files. Filenames are made safe and prefixed with their field key so two upload fields can use the same original filename. The original filename is retained in the file details.

Files saved to Drive may total at most **3 MB (3,145,728 bytes) per submission**. The task checks the base64 structure and decoded byte count against the reported size. Names and MIME types remain visitor-supplied; the task does not scan file contents. If an upload fails or a returned link is missing, no spreadsheet row is added and the task/action reports an error. Some files may already have uploaded; inspect the action results before retrying. Keep the callback subscription in place while uploads are pending.

## Moving shops or stopping

Set up the destination and reconnect the new shop's webhook when moving this task or importing a form. Imported forms have new form codes; update **Form ID** accordingly. Disabling the task stops future saves and leaves existing records and the shared webhook intact. Other subscribed tasks can still run.

## Google Sheets setup

1. Connect your Google account under **Settings → Authentication** in Mechanic.
2. Fill in **Google account** and **Spreadsheet title**. In **Column headings and field keys**, pair each column heading with a form field's data key (for example, `Product` → `product`, `Request` → `issue`). The defaults use `name` and `email`. The form editor shows data keys; use keys, not question labels. Missing or hidden fields leave a blank cell. Files are listed in the fixed File details and links column. With Drive saving enabled, you can also map an upload field key to its own column to store its Drive link there.
3. Leave **Spreadsheet ID** blank, save, and run the task manually. Open the completed `create_spreadsheet` action, copy its `spreadsheet_id`, paste it into this task, and save. Mechanic's integration works with spreadsheets created through Mechanic. Manual runs with an ID already configured do not create a sheet or add a row.
4. The task writes to the spreadsheet's first sheet. Do not reorder the configured columns or the sheet's columns independently; keep headers aligned or create a fresh spreadsheet. Only the selected answer fields are copied. Arrays and addresses are JSON in their selected cells. Answers exceeding 40,000 characters in one cell are rejected.

Every row starts with Received at, Form code, Form revision, Submission ID, Mechanic event ID, and File details and links. If you created a sheet with the older task, rename its sixth header to **File details and links**; the column positions are unchanged. Visitor input is written as **raw values**, so answers beginning with `=` do not execute as spreadsheet formulas.

## Retries and duplicates

Appending a row is not idempotent. Replaying a task, receiving the submission again, or retrying after a lost response can add a duplicate row. This task sets `retry_on_transient_errors: false` for appends so ambiguous writes are not automatically retried by the Google Sheets action. Inspect the destination before manually retrying a failed action. The two IDs help identify repeats; they do not enforce uniqueness. A missing or unconfigured spreadsheet causes a visible task/action error, not a successful save.

Drive retries use stable paths with overwrite enabled for the same event, but concurrent runs can still create duplicate files. A callback replay can append another row. Changing task options while an upload is running does not redirect it: its original account, spreadsheet and column mapping are retained.

See [Mechanic's Google Sheets action](https://learn.mechanic.dev/core/actions/integrations/google-sheets).


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/save-mechanic-form-submissions-to-a-google-sheet), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/save-mechanic-form-submissions-to-a-google-sheet.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
