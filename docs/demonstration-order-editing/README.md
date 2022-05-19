# Demonstration: Order editing

Tags: Demonstration, Order Editing, Orders

This task demonstrates Shopify's ability to edit orders through the admin API. It's intended to be a starting place for developing more specific functionality. Out of the box, this task automatically adds a product to orders that (optionally) meet an order minimum.

* View in the task library: [tasks.mechanic.dev/demonstration-order-editing](https://tasks.mechanic.dev/demonstration-order-editing)
* Task JSON, for direct import: [task.json](../../tasks/demonstration-order-editing.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "minimum_order_total__number": null,
  "variant_id_to_add__number_required": null,
  "quantity_to_add__number_required": null,
  "notify_customer__boolean": null,
  "staff_note__required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task demonstrates Shopify's ability to edit orders through the admin API. It's intended to be a starting place for developing more specific functionality. Out of the box, this task automatically adds a product to orders that (optionally) meet an order minimum.

Configure this task using a variant ID. (To learn how to find this, see [How do I find an ID for a product, collection, order, or something else?](https://docs.usemechanic.com/article/360-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/demonstration-order-editing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-order-editing.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
