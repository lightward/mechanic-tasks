# Schedule product status to active

Tags: Active, Products, Schedule, Status

Use this task to schedule product statuses to Active by date and hour.

* View in the task library: [tasks.mechanic.dev/schedule-product-status-to-active](https://tasks.mechanic.dev/schedule-product-status-to-active)
* Task JSON, for direct import: [task.json](../../tasks/schedule-product-status-to-active.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "date_and_hour_to_become_active__required": "2025-April-26 1PM",
  "product_ids__array_number_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/scheduler/hourly
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to schedule product statuses to Active by date and hour.

Enter the date and hour for the products to become active using this format: 2023-March-01 12AM

Use the "Product IDs" option to choose which products to target. (Learn how to find product IDs here](https://learn.mechanic.dev/techniques/finding-a-resource-id).

Note: Disable this task once your scheduled event is completed

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/schedule-product-status-to-active), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/schedule-product-status-to-active.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
