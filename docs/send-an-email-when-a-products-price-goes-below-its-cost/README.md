# Send an email when a product's price goes below its cost

Tags: Costs, Email, Metafields, Price, Products, Variants

This task watches for product updates, and sends an email (to the recipient of your choice) for each variant that's found to have a unit cost that's greater than the variant's for-sale price.

* View in the task library: [tasks.mechanic.dev/send-an-email-when-a-products-price-goes-below-its-cost](https://tasks.mechanic.dev/send-an-email-when-a-products-price-goes-below-its-cost)
* Task JSON, for direct import: [task.json](../../tasks/send-an-email-when-a-products-price-goes-below-its-cost.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "recipient_email__email_required": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

This task watches for product updates, and sends an email (to the recipient of your choice) for each variant that's found to have a unit cost that's greater than the variant's for-sale price.

If a product is updated that the task hasn't had a chance to previously observe, emails will be sent immediately for any variants that have a unit cost greater than their price.

[YouTube: Watch the development video!](https://youtu.be/LrFu6bV1f1o)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/send-an-email-when-a-products-price-goes-below-its-cost), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/send-an-email-when-a-products-price-goes-below-its-cost.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
