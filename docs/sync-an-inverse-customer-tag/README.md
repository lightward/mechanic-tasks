# Sync an inverse customer tag

Tags: Auto-Tag, Customers, Sync

Shopify's customer group filters allow you to filter by the tags the customer contains – but not the tags a customer does not contain. Use this task to sync an "inverse" tag to all customers who do not have a particular tag, allowing you to filter customers in Shopify by that inverse tag.

* View in the task library: [usemechanic.com/task/sync-an-inverse-customer-tag](https://usemechanic.com/task/sync-an-inverse-customer-tag)
* Task JSON, for direct import: [task.json](../../tasks/sync-an-inverse-customer-tag.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "customer_tag_to_watch__required": "wholesale",
  "customer_tag_to_use_when_missing__required": "retail"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/customers/create
shopify/customers/update
mechanic/user/trigger
mechanic/shopify/bulk_operation
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Shopify's customer group filters allow you to filter by the tags the customer contains – but not the tags a customer does not contain. Use this task to sync an "inverse" tag to all customers who do not have a particular tag, allowing you to filter customers in Shopify by that inverse tag.

To explain by example, if you've already tagged your wholesale customers with "wholesale", configure the "Customer tag to watch" option with "wholesale", and the "Customer tag to use when missing" option with "retail". This task will automatically tag all non-wholesale customers with "retail", and automatically remove that tag from any customers who later receive the tag "wholesale". Please note: if you remove the "retail" tag, this task will simply re-add it. To remove the "retail" tag, you would need to _add_ the "wholesale" tag to that customer.

Run this task manually to scan all of the customers in your store. Otherwise, this task will monitor and sync tags for all new and updated customers, as they come through.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/sync-an-inverse-customer-tag), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/sync-an-inverse-customer-tag.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
