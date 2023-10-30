# Demonstration, Tutorial: Fetch data from a shared Google sheet

Tags: CSV, Demonstration, HTTP, Tutorial

This task script demonstrates using the "http" action to retrieve data from a shared Google sheet, using a GET request. It also includes a basic alert email that will be sent to the configured recipients if Mechanic is unable to access the shared sheet as a CSV.

* View in the task library: [tasks.mechanic.dev/demonstration-fetch-data-from-a-shared-google-sheet](https://tasks.mechanic.dev/demonstration-fetch-data-from-a-shared-google-sheet)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-fetch-data-from-a-shared-google-sheet.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "gsheet_url__required": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRFPR2f9l-w5dSTlcl_ld-mpyqmikI9mupNuc96YLJfmfVqK2c_CJe2_hJkSUVRS-u7jqh8T1jUk-OI/pub?gid=0&single=true&output=csv",
  "alert_email_recipients__array_required": [
    "sample@example.com"
  ]
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

This task script demonstrates using the "http" action to retrieve data from a shared Google sheet, using a GET request. It also includes a basic alert email that will be sent to the configured recipients if Mechanic is unable to access the shared sheet as a CSV.

Review the [tutorial for this task](https://learn.mechanic.dev/resources/tutorials/fetching-data-from-a-shared-google-sheet) in the Mechanic docs to see the steps to share your own Google sheet.

Once the data has been successfully retrieved, it will be available in the **mechanic/actions/perform** event topic as an array of hashes, with the CSV column headers as the keys for each entry in the hash.

**Sample Google sheet data:**
```
| SKU    | Quantity |
|--------|----------|
| ABC123 |       10 |
| DEF456 |        0 |
```

**Sample retrieved data:**
```
[
  {
    "SKU": "ABC123",
    "Quantity": "10"
  },
  {
    "SKU": "DEF456",
    "Quantity": "0"
  }
]
```

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-fetch-data-from-a-shared-google-sheet), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-fetch-data-from-a-shared-google-sheet.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
