# Demonstration: Create sheets and list and create files in Google Drive

Tags: Demonstration, Google Drive, Google Sheets, Integration

# Demonstration: Create Google sheets, and list and create files in Google Drive

* View in the task library: [tasks.mechanic.dev/demonstration-create-sheets-and-list-and-create-files-in-google-drive](https://tasks.mechanic.dev/demonstration-create-sheets-and-list-and-create-files-in-google-drive)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-create-sheets-and-list-and-create-files-in-google-drive.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "google_account__required": null,
  "create_google_sheet_demo__boolean": false,
  "create_google_drive_file_demo__boolean": false,
  "list_google_drive_files_demo__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/user/trigger
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

# Demonstration: Create Google sheets, and list and create files in Google Drive

This task posts a demonstration message in the Slack channel of your choice. Try it out to learn how the Google action works!

## Quick Start

1. Connect your Google account in Mechanic (Settings → Authentication)
2. Set two task options:
    - Your Google account
    - Your choice of one or more of the  Google action demos:
      - Create a new Google Sheet
      - List Google Drive files
      - Create Google Drive file
3. Run the task

Look in your Google Drive for the example files if you ran one of the create demos. Otherwise, the list of Drive files will be output in the task run event log.

## Want to Learn More?

This task demonstrates how to:
- Create a new Google Sheet in your Google Drive
    - With a dynamic file name
    - Setting a sheet tab title
    - Using a couple of common Sheet cell data types: string, boolean
- Listing a few fields from the first 10 files found in the connected Google Drive folder
    - Alternate version which filters the search by files having "Mechanic" in the title
- Creating a simple text file in the root Drive folder

Take a look at the task code to see exactly how it works, then use these examples in your own tasks.

The Google Drive API documentation is primarily geared towards developers familiar with the Google API ecosystem. If the references below seem daunting, then consider trying out the [Google Drive or Google Sheet actions](https://learn.mechanic.dev/platform/integrations/google-drive-and-google-sheets) in Mechanic instead. (Note: there are demonstration tasks in the Mechanic library for each of those actions as well.)

- https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets
- https://developers.google.com/workspace/drive/api/reference/rest/v3
- https://developers.google.com/workspace/drive/api/reference/rest/v3/files

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-create-sheets-and-list-and-create-files-in-google-drive), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-create-sheets-and-list-and-create-files-in-google-drive.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
