# Report Toaster - Pirate Ship Integration

Tags: Costs, External API, Integration, Report Toaster, Shipping

This task is intended to allow Report Toaster customers to send Pirate Ship export CSV files to Mechanic. These files will then be processed to assign shipping costs to orders. 

* View in the task library: [usemechanic.com/task/report-toaster-pirateship-integration](https://usemechanic.com/task/report-toaster-pirateship-integration)
* Task JSON, for direct import: [task.json](../../tasks/report-toaster-pirateship-integration.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_name_column__required": "Order ID",
  "order_name_prepend_pound_sign__boolean": true,
  "shipping_cost_column__required": "Cost"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/emails/received
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task is intended to allow Report Toaster customers to send Pirate Ship export CSV files to Mechanic. These files will then be processed to assign shipping costs to orders. 

One or more attachments can be sent and will be processed as long as they meet the following requirements:

1. The order name is included in a column matching the "Order name column" option.
2. If the order name data does not include the # sign and your shop does, use the corresponding option to havee it prepended.
3. The shipping cost is included in a column matching the "Shipping cost column" option.

Each attachment will be parsed and added to an array of updates that will be sent to Report Toaster.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/report-toaster-pirateship-integration), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/report-toaster-pirateship-integration.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
