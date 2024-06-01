# Auto-approve return requests

Tags: Returns

Use this task to auto-approve return requests, typically made by customers using self-serve from their account. Choose to limit the auto-approval to orders with any of a set of tags, products with any of a set of tags, or specific product categories or types. Optionally, configure email recipients to be notified when any auto-approval occurs.

* View in the task library: [tasks.mechanic.dev/auto-approve-return-requests](https://tasks.mechanic.dev/auto-approve-return-requests)
* Task JSON, for direct import: [task.json](../../tasks/auto-approve-return-requests.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "limit_to_orders_with_any_of_these_tags__array": null,
  "limit_to_products_with_any_of_these_tags__array": null,
  "limit_to_these_product_categories_or_types__array": null,
  "notification_email_recipients__array": null
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/returns/request
mechanic/actions/perform
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to auto-approve return requests, typically made by customers using self-serve from their account. Choose to limit the auto-approval to orders with any of a set of tags, products with any of a set of tags, or specific product categories or types. Optionally, configure email recipients to be notified when any auto-approval occurs.

More info on Shopify self-serve returns [here](https://help.shopify.com/en/manual/orders/refunds-returns/self-serve-returns).

**Important:**
- Adding multiple limit conditions means the return request must meet ALL of the conditions in order to be auto-approved.
- More specifically, if any product conditions are configured, then ALL products on the return must meet those conditions.
- Return requests that are auto-approved **cannot** later be used to exchange items.
- Approval of return requests **cannot** be reverted; instead, the return request may be cancelled if needed.

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-approve-return-requests), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-approve-return-requests.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
