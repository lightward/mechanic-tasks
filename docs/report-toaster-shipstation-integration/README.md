# Report Toaster: ShipStation Integration

Tags: Costs, External API, Integration, Report Toaster, Shipping

This task enables an integration between Report Toaster and ShipStation. Each time an order is fulfilled (determined via the shopify/orders/fulfilled webhook), the ShipStation API is called to return the cost of shipping. This cost is then sent to Report Toaster as the shipping cost for the order.

* View in the task library: [usemechanic.com/task/report-toaster-shipstation-integration](https://usemechanic.com/task/report-toaster-shipstation-integration)
* Task JSON, for direct import: [task.json](../../tasks/report-toaster-shipstation-integration.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "api_username__required": "",
  "api_password__required": ""
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

This task enables an integration between Report Toaster and ShipStation. Each time an order is fulfilled (determined via the shopify/orders/fulfilled webhook), the ShipStation API is called to return the cost of shipping. This cost is then sent to Report Toaster as the shipping cost for the order.

Note that the task currently makes a few assumptions:

1. The task will get all shipping costs for an order once the order is completely fulfilled.
2. The shipping cost will be the shipping cost + insurance cost. This could easily be changed to be controlled with an option if necessary.
3. ShipStation does not store the "#" with the order name. So the task strips it out.

See your [ShipStation Settings](https://ss.shipstation.com/#/settings/api) to retrieve the API Key and Password to use in the options.

This task can be run manually as a test by entering an order name.

See the [Report Toaster](https://learn.mechanic.dev/platform/integrations/report-toaster) section of the Mechanic docs for more information on updating costs.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/report-toaster-shipstation-integration), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/report-toaster-shipstation-integration.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
