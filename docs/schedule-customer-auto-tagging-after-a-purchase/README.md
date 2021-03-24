# Schedule customer auto-tagging after a purchase

Tags: Schedule, Auto-Tag, Customers, Orders

Selling scheduled events? Using this task, you can automatically tag customers after the event has been completed. Simply tag a product with "autotag Authorized May 15", for example, and Mechanic will tag purchasers of that product with "Authorized", on May 15th.

* View in the task library: [usemechanic.com/task/schedule-customer-auto-tagging-after-a-purchase](https://usemechanic.com/task/schedule-customer-auto-tagging-after-a-purchase)
* Task JSON, for direct import: [task.json](../../tasks/schedule-customer-auto-tagging-after-a-purchase.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "autotag_prefix__required": "autotag"
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/paid
user/autotag/customer
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Selling scheduled events? Using this task, you can automatically tag customers after the event has been completed. Simply tag a product with "autotag Authorized May 15", for example, and Mechanic will tag purchasers of that product with "Authorized", on May 15th.

This task comes with a single option: "Autotag prefix". Mechanic will watch your incoming orders for any products that have a tag beginning with that prefix. It will then consider the next word in the product tag to be the _customer_ tag you wish to apply. The rest of the tag will be treated as a date, for the purposes of scheduling the customer tagging.

For example, purchases of a product tagged with "autotag Authorized May 15" will result in customers being auto-tagged with "Authorized", on May 15th.

Products may have multiple tags containing autotag information, and Mechanic will check every product in a customer's order, resulting in as many auto-taggings as are appropriate. autotag events as appropriate.

Note: The customer tag to apply _must not_ contain any spaces!

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/schedule-customer-auto-tagging-after-a-purchase), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/schedule-customer-auto-tagging-after-a-purchase.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
