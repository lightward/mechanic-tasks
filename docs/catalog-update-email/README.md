# Catalog update email

Tags: Alert, Email, Products

Get an email alert whenever a product is created, updated, or deleted. This makes it easy to keep tabs on updates to your catalog – useful if you need a precise audit trail.

* View in the task library: [tasks.mechanic.dev/catalog-update-email](https://tasks.mechanic.dev/catalog-update-email)
* Task JSON, for direct import: [task.json](../../tasks/catalog-update-email.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "recipient_email__required_email": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/products/create
shopify/products/delete
shopify/products/update
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Get an email alert whenever a product is created, updated, or deleted. This makes it easy to keep tabs on updates to your catalog – useful if you need a precise audit trail.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/catalog-update-email), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/catalog-update-email.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
