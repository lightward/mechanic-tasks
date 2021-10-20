# Export a CSV of order shipping addresses

Tags: CSV, Export, Shipping

Useful for quickly preparing labels, or planning a drop-off route.

* View in the task library: [usemechanic.com/task/export-a-csv-of-order-shipping-addresses](https://usemechanic.com/task/export-a-csv-of-order-shipping-addresses)
* Task JSON, for direct import: [task.json](../../tasks/export-a-csv-of-order-shipping-addresses.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "orders_search_query": "fulfillment_status:unshipped",
  "include_name_in_formatted_address__boolean": null,
  "include_company_in_formatted_address__boolean": null,
  "csv_email_recipient__email_required": ""
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Useful for quickly preparing labels, or planning a drop-off route.

Use the "Run task" button to scan all orders matching your search query, exporting their shipping addresses as a CSV. The resulting file will be emailed to the address you specify.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/export-a-csv-of-order-shipping-addresses), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/export-a-csv-of-order-shipping-addresses.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
