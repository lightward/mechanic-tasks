# Email vendors when an order is tagged

Tags: Email, Orders, Tag, Vendor, Watch

Use this task to automatically keep vendors up to date as an order evolves. Configure this task with a list of known vendor names and their email addresses, and this task will email them whenever it notices the tag of your choice on the order.

* View in the task library: [usemechanic.com/task/email-vendors-when-an-order-is-tagged](https://usemechanic.com/task/email-vendors-when-an-order-is-tagged)
* Task JSON, for direct import: [task.json](../../tasks/email-vendors-when-an-order-is-tagged.json)
* Preview task code: [script.liquid](./script.liquid)

## Default options

```json
{
  "order_tag_to_watch_for__required": null,
  "vendors_and_email_addresses__keyval_required": {
    "Apple": "apple@example.com",
    "Nike": "nike@example.com"
  },
  "email_subject__required": "Order {{ order.name }} has been tagged",
  "email_body__required_multiline": "Hello,\n\nOrder {{ order.name }} has been tagged.\n\nThanks,\n{{ shop.name }}",
  "ignore_orders_older_than_this_task__boolean": true
}
```

[Learn about task options in Mechanic](https://docs.usemechanic.com/article/471-task-options)

## Subscriptions

```liquid
shopify/orders/updated
```

[Learn about event subscriptions in Mechanic](https://docs.usemechanic.com/article/408-subscriptions)

## Documentation

Use this task to automatically keep vendors up to date as an order evolves. Configure this task with a list of known vendor names and their email addresses, and this task will email them whenever it notices the tag of your choice on the order.

This task watches for new and updated orders, and sends an email to all known vendors on the order when the tag of your choice is observed. To make a note of which orders have had their emails sent, this task adds another tag. (For example, if this task is configured to watch for the "hold" tag, this task will add the tag "hold-vendor-emails-sent" after sending that order's vendor emails.)

Configure the "Vendors and email addresses" options with vendor names on the left, and vendor email addresses on the right.

Important note: Because Shopify doesn't let apps know _what_ has changed about an order, it's safest to use the "Ignore orders older than this task" option. This way, this task is guaranteed to receive _every_ update for the order since the order is created, allowing it to know for sure when an order has been tagged. Without this option, orders that are _already_ tagged run the risk of having emails sent for them.

## Installing this task

Find this task [in the library at usemechanic.com](https://usemechanic.com/task/email-vendors-when-an-order-is-tagged), and use the "Try this task" button. Or, import [this task's JSON export](../../tasks/email-vendors-when-an-order-is-tagged.json) – see [Importing and exporting tasks](https://docs.usemechanic.com/article/505-importing-and-exporting-tasks) to learn how imports work.

## Contributions

Found a bug? Got an improvement to add? Start here: [../../CONTRIBUTING.md](../../CONTRIBUTING.md).

## Task requests

Submit your [task requests](https://mechanic.canny.io/task-requests) for consideration by the Mechanic community, and they may be chosen for development and inclusion in the [task library](https://tasks.mechanic.dev/)!
