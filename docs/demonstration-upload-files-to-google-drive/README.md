# Demonstration: Upload files to Google Drive

Tags: Demonstration, Files, Google Drive

# Google Drive File Upload Demo

* View in the task library: [tasks.mechanic.dev/demonstration-upload-files-to-google-drive](https://tasks.mechanic.dev/demonstration-upload-files-to-google-drive)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-upload-files-to-google-drive.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "google_account__required": null,
  "overwrite_files_with_the_same_name__boolean": false
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

# Google Drive File Upload Demo

Ever wondered how to upload files to Google Drive from Mechanic? This demo task creates sample files in various formats and uploads them to your Drive. Try it out to learn how the Google Drive action works!

## What's Included

We'll create and upload:
- A text file (showing basic file creation)
- A styled PDF (built from HTML)
- A CSV spreadsheet
- An HTML webpage
- A ZIP file with multiple contents

## Quick Start

1. Connect your Google account (Settings → Authentication)
2. Set two options:
  - Your Google account email
  - Whether to overwrite existing files
3. Run the task!

Look in your Google Drive for all the generated files. Run it again to see how file overwriting works!

## Want to Learn More?

This task shows you how to:
- Create different file types
- Structure file content
- Handle file overwrites
- Process upload responses

Take a look at the task code to see exactly how it works, then use these examples in your own tasks.


## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-upload-files-to-google-drive), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-upload-files-to-google-drive.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
