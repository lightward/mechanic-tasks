# Update empty customer data from addresses

Tags: Address, Customers

Running when a customer is updated, this task will fill empty customer names and/or phones on accounts by pulling the relevant data from any customer addresses on file. Optionally, the task may be run in manual mode to scan and update all customers.

* View in the task library: [tasks.mechanic.dev/update-empty-customer-data-from-addresses](https://tasks.mechanic.dev/update-empty-customer-data-from-addresses)
* Task JSON, for direct import: [task.json](../../tasks/update-empty-customer-data-from-addresses.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_data_to_update__multiselect_o1_first_and_last_name_o2_phone_required": null,
  "enable_manual_runs_to_scan_all_customers__boolean": false
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
{% if options.enable_manual_runs_to_scan_all_customers__boolean %}
  mechanic/user/trigger
  mechanic/shopify/bulk_operation
{% else %}
  shopify/customers/update
{% endif %}
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Running when a customer is updated, this task will fill empty customer names and/or phones on accounts by pulling the relevant data from any customer addresses on file. Optionally, the task may be run in manual mode to scan and update all customers.

This task is a combination of two separate merchant requests, the first desiring a way to backfill empty customer registration names once initial orders were made, and the second which noted that customer phone numbers were only set when they opted in to receive SMS updates during checkout.

__Note:__ To avoid conflicts with this task running on customer updates (the default configuration), the manual run mode must be toggled by checking the "Enable manual runs to scan all customers" option AND saving the task. This will prevent the task from running on customer updates until this option is unchecked.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/update-empty-customer-data-from-addresses), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/update-empty-customer-data-from-addresses.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
