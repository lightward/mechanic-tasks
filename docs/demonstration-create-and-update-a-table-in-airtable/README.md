# Demonstration: Create and update a table in Airtable

Tags: Airtable, Demonstration, Integration

# Demonstration: Create and update a table in Airtable

* View in the task library: [tasks.mechanic.dev/demonstration-create-and-update-a-table-in-airtable](https://tasks.mechanic.dev/demonstration-create-and-update-a-table-in-airtable)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-create-and-update-a-table-in-airtable.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "airtable_account__required": null,
  "airtable_base_id__required": null
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

# Demonstration: Create and update a table in Airtable

This task creates a new table in the Airtable base of your choice, and then populates it with demo data. Try it out to learn how the Airtable action works!

## Quick Start

1. Connect your Airtable account (Settings → Authentication → Airtable)
    - For this demonstration you will need to grant the "Write Records" and "Write Base Schema
" scopes. Don't forget to adjust these scopes as you progress beyond this demo task.
2. Set two task options:
    - Your Airtable account email
    - The Airtable base ID you wish to use
3. Run the task

Look in your Airtable base for the generated table and data.

## Want to Learn More?

This task demonstrates how to:
- Create a new table in an Airtable base, with 3 common field types: string, datetime, and checkbox
- Handle API responses in Mechanic
- Add data to a table

Take a look at the task code to see exactly how it works, then use these examples in your own tasks.

Review the [Airtable API reference](https://airtable.com/developers/web/api) for information on the many ways their API can be used. Airtable also auto-generates API docs for your base and each table in it, which can be found at `https://airtable.com/{{ airtable_base_id}}/api/docs`. The specific field parameters for each table will be documented there, which is very helpful when developing code for adding/updating records.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-create-and-update-a-table-in-airtable), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-create-and-update-a-table-in-airtable.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
