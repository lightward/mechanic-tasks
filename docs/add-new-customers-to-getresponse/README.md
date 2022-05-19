# Add new customers to GetResponse

Tags: Customers, External API

Does what it says on the tin. :) Provide your GetResponse API key (found under the account menu, under "Integrations & API" and "API") and a list token (found in the settings for your list – look for 5-6 letters and numbers), and Mechanic will automatically send each new customer account (full name and email address) over to GetResponse.

* View in the task library: [tasks.mechanic.dev/add-new-customers-to-getresponse](https://tasks.mechanic.dev/add-new-customers-to-getresponse)
* Task JSON, for direct import: [task.json](../../tasks/add-new-customers-to-getresponse.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "getresponse_api_key__required": null,
  "getresponse_list_token__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/customers/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Does what it says on the tin. :) Provide your GetResponse API key (found under the account menu, under "Integrations & API" and "API") and a list token (found in the settings for your list – look for 5-6 letters and numbers), and Mechanic will automatically send each new customer account (full name and email address) over to GetResponse.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/add-new-customers-to-getresponse), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/add-new-customers-to-getresponse.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
