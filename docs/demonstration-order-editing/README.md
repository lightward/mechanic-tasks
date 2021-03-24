# Demonstration: Order editing

Tags: Order Editing, Orders

This task demonstrates Shopify's ability to edit orders through the admin API. It's intended to be a starting place for developing more specific functionality. Out of the box, this task automatically adds a product to orders that (optionally) meet an order minimum.

* View in the task library: [usemechanic.com/task/demonstration-order-editing](https://usemechanic.com/task/demonstration-order-editing)
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

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/create
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task demonstrates Shopify's ability to edit orders through the admin API. It's intended to be a starting place for developing more specific functionality. Out of the box, this task automatically adds a product to orders that (optionally) meet an order minimum.

Configure this task using a variant ID. (To learn how to find this, see [How do I find an ID for a product, collection, order, or something else?](https://docs.usemechanic.com/article/360-how-do-i-find-an-id-for-a-product-collection-order-or-something-else).)

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/demonstration-order-editing), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/demonstration-order-editing.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
