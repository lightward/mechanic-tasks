# Demonstration: Add new orders to a Google Sheet

Tags: Demonstration, Files, Google Sheets, Orders, Spreadsheets

# Order Tracking with Google Sheets (Demonstration)

* View in the task library: [tasks.mechanic.dev/demonstration-add-new-orders-to-goole-sheet](https://tasks.mechanic.dev/demonstration-add-new-orders-to-goole-sheet)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-add-new-orders-to-goole-sheet.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "google_account__required": null,
  "spreadsheet_title__required": null,
  "spreadsheet_id": "",
  "email_address_for_export__email": null,
  "file_format_for_export": "pdf",
  "create_sheet_mode__boolean": true,
  "export_sheet_mode__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
shopify/orders/create
mechanic/actions/perform

```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

# Order Tracking with Google Sheets (Demonstration)

This demonstration task shows you how to use Mechanic's Google Sheets action to track orders. Use this as a learning tool and template for building your own Google Sheets automations!

## What This Demo Shows

Learn how to:
- Create spreadsheets via the Google Sheets API
- Append data automatically
- Export spreadsheets in different formats
- Handle multiple operation modes
- Deliver files via email

## Features

- 📊 Creates a spreadsheet with essential order columns
- ⚡ Automatically logs new orders as they come in
- 📥 Export options: XLSX, CSV, or PDF
- 📧 Email delivery of exports

## What Gets Tracked

Each order entry includes:
- Order number
- Date and time
- Customer name
- Order total
- Line items (with quantities)
- Order status

## Setup Guide

1. **Connect Google Account**
   - Go to Settings → Authentication
   - Connect your Google account

2. **Configure Options**
   - Google account email
   - Spreadsheet title
   - Export email address (for downloads)
   - File format preference (XLSX/CSV/PDF)

3. **Create Your Spreadsheet**
   - Enable "Create sheet mode"
   - Run the task once
   - Copy the `spreadsheet_id` from the results
   - Paste it into the task options
   - Save the task

4. **Start Tracking**
   - Disable "Create sheet mode"
   - The task will now automatically track new orders

## Exporting Data

Need a copy of your data?

1. Enable "Export sheet mode"
2. Choose your preferred format
3. Verify your email address is set
4. Run the task
5. Check your email for the attachment

## Requirements

- Google account connected to Mechanic
- Valid spreadsheet ID (after initial creation)

## Common Issues

- **"Spreadsheet ID required"**: Run in create mode first
- **"Mode conflict"**: Only enable one mode at a time
- **"Cannot export"**: Make sure spreadsheet ID is configured
- **"Missing email"**: Add email address for exports

## Tips

- Create a fresh spreadsheet? Re-enable create mode (delete old ID first)
- Need regular exports? Set up recurring task runs

## Learning Points

This demonstration shows several key Google Sheets action features:
- Creating new spreadsheets with headers
- Appending rows of data
- Exporting in multiple formats
- Error handling
- Email delivery

Use this task as a reference when building your own Google Sheets automations.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-add-new-orders-to-goole-sheet), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-add-new-orders-to-goole-sheet.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
