# Auto-add an order note for returning customers

Tags: Customers, Order Note

Use this task to identify orders that are for customers who have previously ordered from your store. Optionally, ignore more frequent purchasers, by ignoring customers who've made an order recently. Useful for making sure to include a welcome-back gift in order shipments. :)

* View in the task library: [tasks.mechanic.dev/auto-add-an-order-note-for-returning-customers](https://tasks.mechanic.dev/auto-add-an-order-note-for-returning-customers)
* Task JSON, for direct import: [task.json](../../tasks/auto-add-an-order-note-for-returning-customers.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "ignore_customers_who_previously_ordered_after_this_date": null,
  "ignore_customers_who_previously_ordered_less_than_x_days_ago__number": 60,
  "order_note_to_add__required_multiline": "Add the prodigal customer insert"
}
```

[Learn about task options in Mechanic](https://learn.mechanic.dev/core/tasks/options)

## Subscriptions

```liquid
shopify/orders/create
```

[Learn about event subscriptions in Mechanic](https://learn.mechanic.dev/core/tasks/subscriptions)

## Documentation

Use this task to identify orders that are for customers who have previously ordered from your store. Optionally, ignore more frequent purchasers, by ignoring customers who've made an order recently. Useful for making sure to include a welcome-back gift in order shipments. :)

## Installing this task

Find this task [in the library at tasks.mechanic.dev](https://tasks.mechanic.dev/auto-add-an-order-note-for-returning-customers), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/auto-add-an-order-note-for-returning-customers.json) – see [Importing and exporting tasks](https://learn.mechanic.dev/core/tasks/import-and-export) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
