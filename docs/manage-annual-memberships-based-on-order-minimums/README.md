# Manage annual memberships based on order minimums

Tags: Membership, Orders

Use this task to automatically tag customers as members when they purchase a minimum quantity of products. And, check on those customers on a regular basis to ensure that they maintain their order quantity minimums.

* View in the task library: [tasks.mechanic.dev/manage-annual-memberships-based-on-order-minimums](https://tasks.mechanic.dev/manage-annual-memberships-based-on-order-minimums)
* Task JSON, for direct import: [task.json](../../tasks/manage-annual-memberships-based-on-order-minimums.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_qualifying_order_quantity__number_required": null,
  "membership_tag__required": null,
  "months_of_order_history_to_consider_for_renewal__number_required": 12,
  "minimum_qualifying_order_quantity_for_renewal__number_required": null,
  "months_between_renewal_checks__number_required": 12
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/paid
user/membership/renewal+{{ options.months_between_renewal_checks__number_required | default: 12 }}.months
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to automatically tag customers as members when they purchase a minimum quantity of products. And, check on those customers on a regular basis to ensure that they maintain their order quantity minimums.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/manage-annual-memberships-based-on-order-minimums), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/manage-annual-memberships-based-on-order-minimums.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
