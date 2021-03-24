# Track incoming donations in a store metafield

Tags: Metafields, Products

This task watches for orders for a certain donation product, and tallies up the total donation amount in a store metafield, allowing you to display this value in your online storefront.

* View in the task library: [usemechanic.com/task/track-incoming-donations-in-a-store-metafield](https://usemechanic.com/task/track-incoming-donations-in-a-store-metafield)
* Task JSON, for direct import: [task.json](../../tasks/track-incoming-donations-in-a-store-metafield.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "metafield_namespace__required": null,
  "metafield_key__required": null,
  "donation_product_handle__required": null,
  "recalculate_nightly__boolean": null
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
mechanic/user/trigger
{% if options.recalculate_nightly__boolean %}
  mechanic/scheduler/daily
{% endif %}
shopify/orders/create
shopify/orders/paid
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

This task watches for orders for a certain donation product, and tallies up the total donation amount in a store metafield, allowing you to display this value in your online storefront.

This task runs automatically, whenever an order is paid. To fully recalculate the total donation amount stored, click the "Run task" button. Optionally, choose to have this task run the recalculation nightly - useful for making sure that refunds are regularly accounted for.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/track-incoming-donations-in-a-store-metafield), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/track-incoming-donations-in-a-store-metafield.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).
