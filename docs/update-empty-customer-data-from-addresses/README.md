# Backfill customer names from order addresses

Tags: Address, Customers

The merchant who requested this task removed the first- and last-name fields from their storefront's registration form, to speed up the customer signup process. This task fills in those blanks by copying the customer's name from the billing or shipping address (whichever is available), upon their first purchase.

* View in the task library: [usemechanic.com/task/update-empty-customer-data-from-addresses](https://usemechanic.com/task/update-empty-customer-data-from-addresses)
* Task JSON, for direct import: [task.json](../../tasks/update-empty-customer-data-from-addresses.json)
* Preview task code: [script.liquid](./script.liquid)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

The merchant who requested this task removed the first- and last-name fields from their storefront's registration form, to speed up the customer signup process. This task fills in those blanks by copying the customer's name from the billing or shipping address (whichever is available), upon their first purchase.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/update-empty-customer-data-from-addresses), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/update-empty-customer-data-from-addresses.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
