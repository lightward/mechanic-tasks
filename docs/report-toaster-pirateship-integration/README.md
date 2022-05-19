# Report Toaster: Pirate Ship Integration

Tags: Costs, External API, Integration, Report Toaster, Shipping

Email [Pirate Ship](https://www.pirateship.com/) exports to Mechanic and add those shipping costs to orders with Report Toaster.

* View in the task library: [tasks.mechanic.dev/report-toaster-pirateship-integration](https://tasks.mechanic.dev/report-toaster-pirateship-integration)
* Task JSON, for direct import: [task.json](../../tasks/report-toaster-pirateship-integration.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "email_subject__required": "Shipping Costs",
  "order_name_column__required": "Order ID",
  "prepend_pound_sign_to_order_name__boolean": true,
  "shipping_cost_column__required": "Cost"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
mechanic/emails/received
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Email [Pirate Ship](https://www.pirateship.com/) exports to Mechanic and add those shipping costs to orders with Report Toaster.

Did you know your store has its very own email address for triggering Mechanic tasks? A store at example.myshopify.com can receive email at example@mail.usemechanic.com.

One or more attachments can be sent and will be processed as long as they meet the following requirements:

1. The email subject must match the email subject set in the task options.
2. The CSV attachment format matches the order and shipping column names set in the task options.
3. If the order name data does not include the # sign and your shop does, use the prepend pound sign to order name option.

Each attachment will be parsed and sent to Report Toaster.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/report-toaster-pirateship-integration), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/report-toaster-pirateship-integration.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
