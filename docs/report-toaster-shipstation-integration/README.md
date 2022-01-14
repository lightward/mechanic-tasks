# Report Toaster: ShipStation Integration

Tags: Costs, External API, Integration, Report Toaster, Shipping

This task integrates Report Toaster and ShipStation. On order fulfillment, Mechanic calls the ShipStation API  to retrieve the shipping cost, and this cost is sent to Report Toaster.

* View in the task library: [usemechanic.com/task/report-toaster-shipstation-integration](https://usemechanic.com/task/report-toaster-shipstation-integration)
* Task JSON, for direct import: [task.json](../../tasks/report-toaster-shipstation-integration.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "api_username__required": null,
  "api_password__required": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/fulfilled
mechanic/actions/perform
mechanic/user/text
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task integrates Report Toaster and ShipStation. On order fulfillment, Mechanic calls the ShipStation API  to retrieve the shipping cost, and this cost is sent to Report Toaster.

Note - the task currently makes a few assumptions:

1. The task will get all shipping costs for an order once the order is completely fulfilled.
2. The shipping cost is recorded as the shipping cost + insurance cost. You can update the task code to change this logic.
3. ShipStation does not store the "#" with the order name. So the task strips this out.

See your [ShipStation Settings](https://ss.shipstation.com/#/settings/api) to retrieve the API Key and Password to use in the task options.

This task can be run manually as a test by entering an order name.

See the [Report Toaster](https://learn.mechanic.dev/platform/integrations/report-toaster) section in the Mechanic docs for more information on updating costs.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/report-toaster-shipstation-integration), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/report-toaster-shipstation-integration.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
